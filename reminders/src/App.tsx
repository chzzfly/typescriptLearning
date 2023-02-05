import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    console.log(id);
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="App">
      {/* <button className="btn btn-primary">click me</button> */}
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
