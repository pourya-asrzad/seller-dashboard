export const NotificationItem = ({ message, date, hour }) => {
  return (
    <div>
      <span className="text-xs font-medium ">{message}</span>
      <div className="flex gap-1 text-xs text-gray-500">
        <span>{date}</span>/<span>{hour}</span>
      </div>
    </div>
  );
};
