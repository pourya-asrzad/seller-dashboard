import Timer from "@icons/timer.svg";
import { NotificationItem } from "./NotificationItem";
import { Divider } from "@heroui/react";

const notifData = [
  {
    message: "یک خریدار کتاب طلسم مکالمه را سفارش داد",
    date: "30 آذر 1403 ",
    hour: "19:00_21:00",
  },
  {
    message: "یک خریدار کتاب طلسم مکالمه را سفارش داد",
    date: "30 آذر 1403 ",
    hour: "19:00_21:00",
  },
  {
    message: "یک خریدار کتاب طلسم مکالمه را سفارش داد",
    date: "30 آذر 1403 ",
    hour: "19:00_21:00",
  },
  {
    message: "یک خریدار کتاب طلسم مکالمه را سفارش داد",
    date: "30 آذر 1403 ",
    hour: "19:00_21:00",
  },
];
export const Notifications = () => {
  return (
    <section className="w-72 mx-4  p-2 shadow-md" id="notification">
      <div className="flex gap-2 ">
        <Timer />
        <h2 className="text-xs">اعلانات</h2>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {notifData.map((item, index, array) => (
          <div key={index} className="flex flex-col gap-1">
            <NotificationItem {...item} />
            {array.length - 1 !== index && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
};
