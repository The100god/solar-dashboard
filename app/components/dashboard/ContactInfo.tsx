
const ContactInfo = () => {
  return (
    <div className="flex flex-col w-full rounded-3xl bg-slate-900/80 border border-sky-800/80 p-5 sm:p-6 shadow-lg shadow-slate-950/60">
        <p className="text-sm font-semibold mb-3">
          Contact Information
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-2">
          <div className="mb-1 w-full flex sm:flex-1/4 flex-row sm:flex-col gap-2 rounded-2xl bg-slate-950/60 border border-slate-700 p-3">
            <span className="font-medium">Email:-</span>
              <a
                href="mailto:Info@Greenlaysolarindia.com"
                className=" hover:text-sky-300"
              >
                Info@Greenlaysolarindia.com
              </a>
          </div>

          <div className="flex w-full sm:flex-1/4 flex-row md:flex-col mb-1 gap-2 rounded-2xl bg-slate-950/60 border border-slate-700 p-3">
            <span className="font-medium">Phone:- </span>
            <a href="tel:9810230136" className=" hover:text-sky-300">
              9810230136
            </a>
          </div>

          <div className="mb-1 w-full flex sm:flex-1/4 flex-row md:flex-col gap-2 rounded-2xl bg-slate-950/60 border border-slate-700 p-3">
            <span className="font-medium">Address:- </span>
            <span className="font-medium">Coming Soon</span>
          </div>

          <div className="mb-1 w-full flex sm:flex-1/4 items-start justify-normal flex-row md:flex-col gap-2 rounded-2xl bg-slate-950/60 border border-slate-700 p-3">
            <span className="font-medium">Business Hours:-</span>
            <span className="flex flex-col gap-1">

            <span className="font-medium">Mon – Sat</span>
            <span className="font-medium">9AM – 6AM</span>
            </span>
          </div>
        </div>
      </div>

  )
}

export default ContactInfo
