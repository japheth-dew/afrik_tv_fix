import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react"
import Icon from "../../components/Icon"

const AccordionSx = {
  '&.Mui-expanded': {
    margin: 0,
  },
  '&:before': {
    display: 'none',
  },
  '&.MuiAccordion-root': {
    boxShadow: 'none',
  },
  // adjust padding
  '& .MuiAccordionSummary-root': {
    padding: '0 0 0 0'
  }
}

export const ExpandIcon = () => (
  <span className="self-center rotate-90"><Icon name="chevronRight" /></span>
)

export const ParentalControl = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="md:max-w-lg">
      <h1 className="text-2xl font-bold">Parental Controls</h1>
      <div className="mt-5">
        {[0, 1, 2, 3].map((item) => (
          <Accordion className="py-5 border-b border-[#E9E9E9]" key={item} sx={AccordionSx}>
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <div className="flex flex-row gap-6 items-start gap-2 cursor-pointer">
                <img className="w-16 h-16 rounded-lg cover" src="/src/assets/profile.png" />
                <div className="flex-col gap-6 grow">
                  <h2 className="font-bold text-lg">Opemipo Disu</h2>
                  <div className="text-[#757984]">All maturity ratings</div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails className="pt-4 pl-20">
              <div className="flex justify-between">
                <div className="flex flex-col gap-px">
                  <div>Language used</div>
                  <div className="text-[#757984] text-sm">English</div>
                </div>
                <button className="border border-[#E9E9E9] py-2 px-7 rounded-md">Change</button>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="flex items-center gap-3">
                  {/* Check box */}
                  <Checkbox defaultChecked />
                  <div className="text-[#07092C]">View Restriction</div>
                </div>
                <div className="flex items-center gap-3">
                  {/* Check box */}
                  <Checkbox defaultChecked />
                  <div className="text-[#07092C]">Autoplay Episodes</div>
                </div>
                <div className="flex items-center gap-3">
                  {/* Check box */}
                  <Checkbox defaultChecked />
                  <div className="text-[#07092C]">Lock Profile</div>
                </div>
                <div className="flex items-center gap-3">
                  {/* Check box */}
                  <Checkbox defaultChecked />
                  <div className="text-[#07092C]">All Maturing Rating</div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}