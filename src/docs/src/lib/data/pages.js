export const pagesThatDontNeedSidebar = [
  "/",
  "/components/",
  "/blog/",
  "/blog/*/",
  "/store/",
  "/resources/*/",
];

export const pages = [
  {
    name: "Docs",
    icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="text-orange-400 h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/></svg>',
    collapsible: true,
    items: [
      {
        name: "Install",
        tags: "how setup install npm",
        href: "/docs/install/",
        highlightAnotherItem: "/docs/cdn",
      },
      {
        name: "Use",
        tags: "how use",
        href: "/docs/use/",
      },
      {
        name: "Customize components",
        tags: "customize components",
        href: "/docs/customize/",
      },
      {
        name: "Config",
        tags: "setup config styled themes base logs utils rtl",
        href: "/docs/config/",
      },
      {
        name: "Colors",
        tags: "colors",
        href: "/docs/colors/",
      },
      {
        name: "Themes",
        tags: "themes disable custom color generator",
        href: "/docs/themes/",
      },
      {
        name: "Utilities",
        tags: "Utilities utility class",
        href: "/docs/utilities/",
      },
      {
        name: "Layout & Typography",
        tags: "layout typography padding margin grid flex spacing font",
        href: "/docs/layout-and-typography/",
      },
    ],
  },
  {
    name: "Components",
    icon: '<svg class="w-5 h-5 text-green-600" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 29H6V43H20V29Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M24 4L34 21H14L24 4Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
    collapsible: true,
    items: [
      {
        name: "Data display",
        icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"/><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z" fill="none" stroke="currentColor" stroke-width="4"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)" fill="currentColor"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)" fill="currentColor"/></svg>',
        items: [
          {
            name: "Avatar",
            tags: "avatar image profile picture",
            href: "/components/avatar/",
          },
          {
            name: "Badge",
            tags: "badge tag label",
            href: "/components/badge/",
          },
          {
            name: "Chat bubble",
            tags: "chat bubble dialog message messenger",
            href: "/components/chat/",
          },
          {
            name: "Countdown",
            tags: "countdown counter timer",
            href: "/components/countdown/",
          },
          {
            name: "Kbd",
            tags: "kbd keyboard ⌨️",
            href: "/components/kbd/",
          },
          {
            name: "Stat",
            tags: "stats data",
            href: "/components/stat/",
          },
          {
            name: "Timeline",
            tags: "timeline",
            href: "/components/timeline/",
          },
        ],
      },
      {
        name: "Navigation",
        icon: '<svg width="18" height="18" viewBox="0 0 48 48" class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>',
        items: [
          {
            name: "Breadcrumbs",
            tags: "breadcrumbs links",
            href: "/components/breadcrumbs/",
          },
          {
            name: "Link",
            tags: "link href anchor 🔗",
            href: "/components/link/",
          },
          {
            name: "Menu",
            tags: "menu list",
            href: "/components/menu/",
          },
          {
            name: "Steps",
            tags: "steps progress",
            href: "/components/steps/",
          },
        ],
      },
      {
        name: "Feedback",
        icon: '<svg width="18" height="18" class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H44V36H29L24 41L19 36H4V6Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M23 21H25.0025" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/><path d="M33.001 21H34.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/><path d="M13.001 21H14.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/></svg>',
        items: [
          {
            name: "Alert",
            tags: "alert warning error message",
            href: "/components/alert/",
          },
          {
            name: "Loading",
            tags: "loading loader spinner progress",
            href: "/components/loading/",
          },
          {
            name: "Progress",
            tags: "progressbar progress loading percentage",
            href: "/components/progress/",
          },
          {
            name: "Radial progress",
            tags: "radial circle progressbar progress loading percentage",
            href: "/components/radial-progress/",
          },
        ],
      },
    ],
  },
  {
    name: "Playground",
    tags: "playground tailwind play",
    href: "/tailwindplay/",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>',
    target: "blank",
  },
  {
    name: "GitHub",
    tags: "github",
    href: "https://github.com/coingaming/moon-ui",
    icon: '<svg width="18" height="18" class="h-5 w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/><path d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/><path d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/><path d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518" stroke="currentColor" stroke-width="4" stroke-linecap="butt"/></svg>',
    target: "blank",
  },

  {
    items: [
      {
        name: "CDN",
        tags: "how cdn",
        href: "/docs/cdn/",
      },
    ],
  },
];
