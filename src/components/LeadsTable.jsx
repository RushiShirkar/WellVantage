import { memo } from "react";
import rightArrowIcon from '../assets/rightArrowIcon.svg';
import boxIcon from '../assets/boxIcon.svg';
import whatsappIcon from '../assets/whatsappIcon.svg';
import userIcon from '../assets/userIcon.svg';

const INTEREST_STYLES = {
  Hot: "bg-red-100 text-red-700 ring-red-200",
  Warm: "bg-amber-100 text-amber-700 ring-amber-200",
  Cold: "bg-sky-100 text-sky-700 ring-sky-200",
};

function InterestBadge({ level }) {
  const base =
    "inline-flex items-center p-1 text-xs font-semibold";
  const cls = INTEREST_STYLES[level] ?? "bg-gray-100 text-gray-700 ring-gray-200";
  const icon =
    level === "Hot" ? "🔥" : level === "Warm" ? "🧯" : level === "Cold" ? "🧊" : "";
  return <span className={`${base} ${cls}`}><span>{icon}</span>{level}</span>;
}

function FollowUpBadge({ text = "Need Follow Up" }) {
  return (
    <span className="inline-flex p-1 text-xs font-semibold bg-[#FFECCD] text-[#F59E0B]">
      {text}
    </span>
  );
}

function ActionIcons() {
  return (
    <div className="flex items-center justify-center gap-3 text-gray-700">
      <img src={whatsappIcon} alt="WhatsApp" className="w-[31px] h-[31px]" />
      <img src={rightArrowIcon} alt="Arrow" className="w-[31px] h-[31px]" />
      <img src={boxIcon} alt="Cube" className="w-[31px] h-[31px]" />
    </div>
  );
}

function LeadsTable({ leads = [] }) {

  if (leads.length === 0) {
    return (
      <div className="w-full mt-12">
        <p className="text-center text-gray-500 font-poppins font-medium text-[18px]">No leads found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Desktop/tablet: bordered table */}
      <div className="hidden sm:block">
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-[720px] w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-[#474747] text-center">
                <th className="font-bold text-[16px] py-3 px-3">Name</th>
                <th className="font-bold text-[16px] py-3 px-3">Interest Level</th>
                <th className="font-bold text-[16px] py-3 px-3">Assigned to</th>
                <th className="font-bold text-[16px] py-3 px-3">Last Interaction</th>
                <th className="font-bold text-[16px] py-3 px-3">Follow Up</th>
                <th className="font-bold text-[16px] py-3 px-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white [&>tr>td]:text-center [&>tr>td:last-child]:pr-5">
              {leads.map((lead, idx) => (
                <tr key={idx} className="align-middle">
                  <td className="py-4 px-3">
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <img src={userIcon} alt="User" className="w-[31px] h-[31px]" />
                      </div>
                      <button className="text-blue-400 hover:underline font-medium">
                        {lead?.firstName + " " + lead?.lastName}
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-3">
                    <InterestBadge level={lead?.interestLevel || '-'} />
                  </td>
                  <td className="py-4 px-3 text-gray-700">{lead.assignee || '-'}</td>
                  <td className="py-4 px-3 text-gray-700">{lead.inquiryDate || '-'}</td>
                  <td className="py-4 px-3">
                    <FollowUpBadge />
                  </td>
                  <td className="py-4 px-3">
                    <ActionIcons />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="sm:hidden mt-6 space-y-3 overflow-auto">
        {leads.map((lead, idx) => (
          <div key={`m-${idx}`} className="rounded-lg border border-gray-200 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">👤</div>
                <div className="font-medium text-blue-600">{lead?.firstName + " " + lead?.lastName}</div>
              </div>
              <InterestBadge level={lead?.interestLevel || '-'} />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div>
                <div className="text-gray-500">Assigned to</div>
                <div className="text-gray-800">{lead?.assignee || '-'}</div>
              </div>
              <div>
                <div className="text-gray-500">Last Interaction</div>
                <div className="text-gray-800">{lead?.inquiryDate || '-'}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <FollowUpBadge />
              <ActionIcons />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(LeadsTable);