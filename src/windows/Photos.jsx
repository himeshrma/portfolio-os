import React from "react";

import { Mail, Search } from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControl } from "#components";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";

const Photos = () => {
  const { openWindow, windows } = useWindowStore();
  const win = windows.photos;

  // 🔒 Guard: window not open
  if (!win?.isOpen) return null;

  return (
    <>
      <div id="window-header">
        <WindowControl target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <p>Selected graphic design work (click to view) </p>
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Poster.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img src={img} alt={`Gallery image ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
