import { Checkbox, clsx } from "@mantine/core";
import { useState } from "react";

const list = [
  {
    name: "Restock for Weekend bonanza",
    checked: false,
    description:
      "The upcoming weekend will expect a raise of customer due to long weekend",
  },
  {
    name: "Contact Supplier for the increased price",
    checked: true,
    description:
      "There has been an increment of 5% in your inventory price, you may want to contact Fresh Mart about it",
  },
  {
    name: "Look for more workers due to lack of manpower",
    checked: false,
    description:
      "The number of customers have been raising for the past month, you may need more workers to compensate for it.",
  },
  {
    name: "Employee training for new joiner",
    checked: false,
    description:
      "Train David on preparing pizza toppings before moving on to handling the oven.",
  },
];

const Checklist = () => {
  const [checkList, setChecklist] = useState(list);
  const setChecked = (index: number, val: boolean) => {
    setChecklist(
      checkList.map((item, idx) => {
        if (index === idx) {
          return { ...item, checked: val };
        }
        return item;
      })
    );
  };
  return (
    <div className="h-max ">
      <div className="mb-3">
        <p className="text-xl font-semibold">Checklist</p>
        <p className="font-light text-slate-500">
          Here are your TODOs for the day
        </p>
      </div>
      <div className="-mx-4  mb-5 border-b-2" />
      <div className="space-y-6">
        {checkList.map((item, index) => (
          <Checkbox
            key={index}
            onChange={(ev) => setChecked(index, ev.target.checked)}
            label={
              <div className="">
                <div
                  className={clsx("mb-2 text-lg font-semibold", {
                    "line-through": item.checked,
                  })}
                  style={{ lineHeight: "1.1rem" }}
                >
                  {item.name}
                </div>
                <div
                  className={clsx({
                    "line-through": item.checked,
                  })}
                >
                  {item.description}
                </div>
              </div>
            }
            checked={item.checked}
          />
        ))}
      </div>
    </div>
  );
};

export default Checklist;
