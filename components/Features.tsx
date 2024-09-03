import Feature from "./Feature";
import ScheduleIcon from '../public/schedule.svg';
import MeetIcon from '../public/meet.svg';
import DocumentIcon from '../public/document.svg';
import BillIcon from '../public/bill.svg';

const Features = () => {
  return (
    <section className="bg-blue-50 pb-10">
      <div className="flex flex-col items-center">
        <div className="p-4 w-[380px] sm:w-[700px] mt-12 text-center">
          <h3 className="text-blue-90 text-3xl font-bold">
            Our Features & Services.
          </h3>
          <p className="text-slate-700 text-[17px] text-center my-4">
            Adam HRS offers a wide variety of services which will support the
            entire process of theraphy, from scheduling appointments to
            telehealth sessions to documenting the session.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around py-6">
        <Feature
          image={ScheduleIcon}
          title="Schedule"
          description="Schedule an appointment or allow your client to book through your client portal."
        />
        <Feature
          image={MeetIcon}
          title="Meet"
          description="Meet with clients in person or remotely with reliable, engaging telehealth sessions."
        />
        <Feature
          image={DocumentIcon}
          title="Take Notes"
          description="Start the note from your To-Do list, and document the session with easy‑to‑use templates."
        />
        <Feature
          image={BillIcon}
          title="Billing"
          description="Create and submit insurance claims with just a few clicks. Sit back, relax, and get paid."
        />
      </div>
      <div className="w-full py-5 flex flex-row justify-around">
        <Feature
          image={ScheduleIcon}
          title="Schedule"
          description="Schedule an appointment or allow your client to book through your client portal."
        />
        <Feature
          image={MeetIcon}
          title="Meet"
          description="Meet with clients in person or remotely with reliable, engaging telehealth sessions."
        />
        <Feature
          image={DocumentIcon}
          title="Take Notes"
          description="Start the note from your To-Do list, and document the session with easy‑to‑use templates."
        />
        <Feature
          image={BillIcon}
          title="Billing"
          description="Create and submit insurance claims with just a few clicks. Sit back, relax, and get paid."
        />
      </div>
    </section>
  );
};

export default Features;
