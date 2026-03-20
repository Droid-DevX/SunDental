export function isClinicOpen() {
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const date = new Date(now);
  const hour = date.getHours();
  // Open between 10:00 AM (10) and 8:00 PM (20)
  return hour >= 10 && hour < 20;
}
