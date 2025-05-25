import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row justify-between bg-blue-950 p-10 ">
        <div className="flex flex-col gap-4">
          <h4 className="text-slate-200 text-2xl">Filters</h4>
          <p className="text-slate-200 text-sm">All ELEzirank</p>
          <p className="text-slate-200 text-sm">© 2024 American</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-slate-200 text-2xl">About us</h4>
          <p className="text-slate-200 text-sm">About us</p>
          <p className="text-slate-200 text-sm">Contact</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-slate-200 text-2xl">Follow Us</h4>
          <div className="flex flex-row gap-5">
            <div className="p-2 bg-blue-900 rounded-full border-none ">
              <Facebook className="text-white" />
            </div>

            <div className="p-2 bg-blue-900 rounded-full border-none ">
              <Twitter className="text-white" />
            </div>
            <div className="p-2 bg-blue-900 rounded-full border-none">
              <Instagram className="text-white" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
