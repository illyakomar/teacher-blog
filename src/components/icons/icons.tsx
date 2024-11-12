import {
 Facebook,
 Instagram,
 Linkedin,
 LucideIcon,
 Send,
 Youtube,
} from 'lucide-react';

export type Icon = LucideIcon;

export type IconMap = Record<string, Icon>;

export const Icons: IconMap = {
 telegram: Send,
 instagram: Instagram,
 youTube: Youtube,
 facebook: Facebook,
 linkedin: Linkedin,
};

export const LogoBigIcon = () => (
 <svg
  width='155'
  height='42'
  viewBox='0 0 155 42'
  xmlns='http://www.w3.org/2000/svg'
  className='fill-black dark:fill-gray-100'
 >
  <path d='M2.37261 0L0 10.5974H10.9829L8.18933 22.8701H10.6767L6.429 42H20.3585L24.4914 22.9091L22.0806 22.8701L24.7593 10.5974H35.7039L38 0H2.37261Z' />
  <path d='M39.3423 17.9925L39.6619 16.0909H48.6214L48.3018 17.9925H44.962L43.4705 27H41.1907L42.6822 17.9925H39.3423ZM48.2859 27L50.0969 16.0909H57.4478L57.1282 17.9925H52.0838L51.6577 20.592H56.3239L56.0043 22.4936H51.3381L50.9119 25.0984H55.9776L55.658 27H48.2859ZM59.3508 27H56.8792L62.4562 16.0909H65.4285L67.3781 27H64.9065L63.5802 18.5838H63.4949L59.3508 27ZM59.9154 22.712H65.7535L65.4445 24.5124H59.6064L59.9154 22.712ZM78.9703 19.9102H76.6692C76.6763 19.6048 76.6373 19.3349 76.552 19.1005C76.4668 18.8626 76.339 18.6602 76.1685 18.4933C76.0016 18.3263 75.7974 18.2003 75.5559 18.1151C75.3145 18.0263 75.0428 17.9819 74.7409 17.9819C74.1586 17.9819 73.6241 18.1275 73.1376 18.4187C72.6511 18.7099 72.2409 19.1325 71.9071 19.6864C71.5733 20.2369 71.3425 20.9027 71.2147 21.6839C71.0904 22.4368 71.0975 23.0671 71.236 23.5749C71.3745 24.0827 71.6195 24.4663 71.9711 24.7255C72.3262 24.9812 72.7683 25.109 73.2974 25.109C73.6241 25.109 73.9348 25.0682 74.2296 24.9865C74.5243 24.9013 74.7924 24.7805 75.0339 24.6243C75.2789 24.4645 75.492 24.271 75.6731 24.0437C75.8578 23.8164 76.0016 23.5589 76.1046 23.2713H78.4217C78.2761 23.772 78.0488 24.255 77.7399 24.7202C77.4345 25.1854 77.0563 25.6009 76.6053 25.9666C76.1543 26.3288 75.6412 26.6165 75.0659 26.8295C74.4906 27.0426 73.8603 27.1491 73.1749 27.1491C72.1841 27.1491 71.3336 26.9219 70.6234 26.4673C69.9167 26.0128 69.4071 25.3576 69.0946 24.5018C68.7821 23.646 68.7235 22.6143 68.9189 21.407C69.1142 20.2386 69.4959 19.2479 70.0641 18.4347C70.6358 17.6179 71.3301 16.9982 72.1468 16.5756C72.9672 16.1531 73.8443 15.9418 74.7782 15.9418C75.4281 15.9418 76.0158 16.0305 76.5414 16.2081C77.0669 16.3857 77.5144 16.6449 77.8837 16.9858C78.2566 17.3232 78.5371 17.7369 78.7253 18.2269C78.9135 18.717 78.9952 19.2781 78.9703 19.9102ZM79.4577 27L81.2688 16.0909H83.5753L82.8295 20.592H87.5117L88.2575 16.0909H90.5586L88.7475 27H86.4464L87.1921 22.4936H82.5099L81.7642 27H79.4577ZM90.6491 27L92.4602 16.0909H99.8111L99.4915 17.9925H94.4471L94.021 20.592H98.6871L98.3675 22.4936H93.7013L93.2752 25.0984H98.3409L98.0213 27H90.6491ZM99.8337 27L101.645 16.0909H105.949C106.773 16.0909 107.451 16.2365 107.984 16.5277C108.52 16.8189 108.896 17.2326 109.113 17.7688C109.333 18.3015 109.384 18.93 109.267 19.6545C109.147 20.3789 108.886 21.0004 108.484 21.5188C108.087 22.0373 107.568 22.4368 106.929 22.7173C106.293 22.9943 105.556 23.1328 104.718 23.1328H101.837L102.156 21.2791H104.66C105.1 21.2791 105.476 21.2187 105.789 21.098C106.101 20.9773 106.348 20.7962 106.529 20.5547C106.714 20.3132 106.835 20.0131 106.892 19.6545C106.952 19.2887 106.931 18.9833 106.828 18.7383C106.725 18.4897 106.538 18.3015 106.268 18.1737C105.998 18.0423 105.643 17.9766 105.203 17.9766H103.648L102.14 27H99.8337ZM106.545 22.0355L108.436 27H105.89L104.058 22.0355H106.545ZM113.237 27L115.048 16.0909H119.416C120.219 16.0909 120.868 16.2099 121.366 16.4478C121.866 16.6857 122.216 17.016 122.415 17.4386C122.614 17.8576 122.667 18.3406 122.575 18.8874C122.5 19.3136 122.349 19.6864 122.122 20.006C121.898 20.3256 121.621 20.5884 121.291 20.7944C120.961 21.0004 120.602 21.146 120.215 21.2312L120.194 21.3377C120.606 21.3555 120.977 21.4727 121.307 21.6893C121.637 21.9023 121.884 22.2042 122.047 22.5948C122.211 22.9854 122.248 23.4489 122.159 23.9851C122.063 24.5639 121.834 25.0806 121.472 25.5352C121.11 25.9862 120.627 26.343 120.023 26.6058C119.423 26.8686 118.715 27 117.898 27H113.237ZM115.863 25.1143H117.743C118.383 25.1143 118.871 24.9901 119.208 24.7415C119.546 24.4929 119.748 24.1644 119.816 23.756C119.862 23.4542 119.831 23.1879 119.725 22.957C119.622 22.7262 119.446 22.5451 119.198 22.4137C118.953 22.2823 118.642 22.2166 118.265 22.2166H116.337L115.863 25.1143ZM116.604 20.6559H118.313C118.626 20.6559 118.915 20.6009 119.182 20.4908C119.452 20.3771 119.673 20.2173 119.847 20.0114C120.025 19.8018 120.137 19.555 120.183 19.271C120.247 18.8732 120.158 18.5554 119.917 18.3175C119.679 18.076 119.306 17.9553 118.798 17.9553H117.051L116.604 20.6559ZM123.154 27L124.965 16.0909H127.272L125.78 25.0984H130.457L130.137 27H123.154ZM142.149 21.6946C141.95 22.8594 141.565 23.8484 140.993 24.6616C140.425 25.4748 139.731 26.0927 138.91 26.5153C138.094 26.9379 137.213 27.1491 136.268 27.1491C135.278 27.1491 134.424 26.9237 133.706 26.4727C132.992 26.0217 132.476 25.37 132.156 24.5178C131.837 23.6619 131.776 22.6303 131.975 21.4229C132.167 20.2546 132.549 19.2638 133.12 18.4506C133.692 17.6339 134.39 17.0124 135.214 16.5863C136.038 16.1566 136.924 15.9418 137.872 15.9418C138.855 15.9418 139.704 16.169 140.418 16.6236C141.135 17.0781 141.652 17.7351 141.968 18.5945C142.288 19.4503 142.348 20.4837 142.149 21.6946ZM139.853 21.4229C139.978 20.6737 139.972 20.0451 139.837 19.5373C139.706 19.0259 139.464 18.6388 139.113 18.3761C138.761 18.1133 138.317 17.9819 137.781 17.9819C137.199 17.9819 136.664 18.1275 136.178 18.4187C135.695 18.7099 135.286 19.1325 134.953 19.6864C134.622 20.2369 134.393 20.9062 134.266 21.6946C134.138 22.4474 134.141 23.076 134.276 23.5803C134.415 24.0845 134.661 24.4663 135.017 24.7255C135.375 24.9812 135.821 25.109 136.354 25.109C136.932 25.109 137.462 24.967 137.941 24.6829C138.424 24.3952 138.831 23.978 139.161 23.4311C139.491 22.8807 139.722 22.2113 139.853 21.4229ZM151.432 19.6172C151.404 19.358 151.343 19.1289 151.251 18.93C151.162 18.7276 151.04 18.5572 150.884 18.4187C150.727 18.2766 150.537 18.1683 150.314 18.0938C150.09 18.0192 149.831 17.9819 149.536 17.9819C148.978 17.9819 148.456 18.1204 147.97 18.3974C147.487 18.6744 147.075 19.0774 146.734 19.6065C146.393 20.1321 146.161 20.7749 146.036 21.5348C145.908 22.2947 145.908 22.9411 146.036 23.4737C146.168 24.0064 146.414 24.413 146.777 24.6935C147.142 24.9705 147.613 25.109 148.188 25.109C148.71 25.109 149.179 25.0167 149.594 24.832C150.01 24.6438 150.349 24.3793 150.612 24.0384C150.878 23.6974 151.049 23.2944 151.123 22.8292L151.581 22.8984H148.774L149.062 21.1619H153.627L153.392 22.5362C153.24 23.495 152.904 24.3189 152.386 25.0078C151.867 25.6967 151.221 26.2259 150.447 26.5952C149.676 26.9645 148.831 27.1491 147.911 27.1491C146.888 27.1491 146.027 26.9237 145.328 26.4727C144.632 26.0181 144.136 25.3736 143.842 24.5391C143.55 23.701 143.499 22.7067 143.687 21.5561C143.833 20.6719 144.092 19.8835 144.465 19.1911C144.841 18.495 145.301 17.9055 145.844 17.4226C146.388 16.9396 146.99 16.5721 147.65 16.32C148.314 16.0678 149.005 15.9418 149.722 15.9418C150.34 15.9418 150.9 16.0323 151.4 16.2134C151.904 16.391 152.336 16.6431 152.695 16.9698C153.057 17.2965 153.33 17.6854 153.515 18.1364C153.703 18.5838 153.79 19.0774 153.776 19.6172H151.432Z' />
 </svg>
);
