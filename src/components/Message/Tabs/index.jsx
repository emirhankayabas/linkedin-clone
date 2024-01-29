import { Fragment } from "react";
import { Tab } from "@headlessui/react";

import MessageOther from "~/assets/images/message-other.svg";

export default function Tabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`
            w-full py-2 px-3 border-b-2 outline-none font-semibold text-sm transition-all
            ${
              selected
                ? "text-green-500 border-green-500"
                : "text-white text-opacity-75 border-transparent"
            }
            `}
            >
              Odaklı
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`
          w-full py-2 px-3 border-b-2 outline-none font-semibold text-sm transition-all
          ${
            selected
              ? "text-green-500 border-green-500"
              : "text-white text-opacity-75 border-transparent"
          }
          `}
            >
              Diğer
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="flex gap-x-1.5 px-2 pt-3 hover:bg-[#ffffff2e] cursor-pointer">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/304"
                alt="Avatar"
                className="w-12 h-12 min-w-12 min-h-12 rounded-full"
              />
            </div>
            <div className="w-full border-b border-[#8c8c8c40] pb-1.5">
              <div className="flex items-center justify-between">
                <h6 className="text-sm text-white text-opacity-90">
                  Diane Chiang
                </h6>
                <time className="text-xs text-white text-opacity-60">
                  25 Oca
                </time>
              </div>
              <div className="text-xs line-clamp-2 text-white text-opacity-60 max-w-48">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                commodi dolor aliquid sed aspernatur quod eligendi doloribus
                iste, reprehenderit, in quidem, dolorum corrupti atque quasi
                assumenda blanditiis expedita voluptatum non?
              </div>
            </div>
          </div>
          <div className="flex gap-x-1.5 px-2 pt-3 hover:bg-[#ffffff2e] cursor-pointer">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/305"
                alt="Avatar"
                className="w-12 h-12 min-w-12 min-h-12 rounded-full"
              />
              <span className="w-3 h-3 block absolute right-1 bottom-3 border-[3px] border-green-500 rounded-full bg-primary">
                &nbsp;
              </span>
            </div>
            <div className="w-full border-b border-[#8c8c8c40] pb-1.5">
              <div className="flex items-center justify-between">
                <h6 className="text-sm text-white text-opacity-90">
                  Diane Chiang
                </h6>
                <time className="text-xs text-white text-opacity-60">
                  25 Oca 2023
                </time>
              </div>
              <div className="text-xs line-clamp-2 text-white text-opacity-60 max-w-48">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                commodi dolor aliquid sed aspernatur quod eligendi doloribus
                iste, reprehenderit, in quidem, dolorum corrupti atque quasi
                assumenda blanditiis expedita voluptatum non?
              </div>
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="flex flex-col items-center justify-center gap-y-4 py-6 px-4">
            <img
              src={MessageOther}
              alt="Message Other Image"
              className="w-32 h-32"
            />
            <div className="text-center text-white text-opacity-90">
              <h6 className="text-2xl mb-4">Henüz mesaj yok</h6>
              <p>Kariyerinizde ilerlemek için ulaşın ve bir görüşme başlatın</p>
            </div>
            <button className="text-white text-opacity-90 border border-white border-opacity-75 rounded-full py-1 px-4 font-semibold hover:bg-white hover:bg-opacity-20 transition-colors">
              Mesaj gönder
            </button>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
