export function MockContactForm() {
  return (
    <div className="space-y-6 rounded-xl border border-border/60 bg-card p-8 shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">
          <span>Name</span>
          <input className="w-full rounded-md border border-input bg-background px-3 py-2.5 font-normal" placeholder="Jane Doe" />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>Work Email</span>
          <input className="w-full rounded-md border border-input bg-background px-3 py-2.5 font-normal" placeholder="jane@company.com" />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>Company / Organization</span>
          <input className="w-full rounded-md border border-input bg-background px-3 py-2.5 font-normal" placeholder="Acme Robotics" />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span>Area of Interest</span>
          <select className="w-full rounded-md border border-input bg-background px-3 py-2.5 font-normal">
            <option>Select an area</option>
            <option>Investor</option>
            <option>Partner</option>
            <option>Talent</option>
            <option>Media</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="block space-y-2 text-sm font-medium">
        <span>Message</span>
        <textarea className="min-h-32 w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 font-normal" placeholder="Briefly describe your interest in NeuBlox..." />
      </label>
      <button className="rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground">Request Contact</button>
    </div>
  );
}
