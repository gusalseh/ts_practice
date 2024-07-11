// export default function Icon() {
//   return (
//     <div>
//       <h3>Icon</h3>
//       <span className="material-icons" style={{ color: "blue" }}>
//         home
//       </span>
//       <span
//         className="material-icons"
//         style={{ fontSize: "50px", color: "red" }}
//       >
//         check_circle_outline
//       </span>
//     </div>
//   );
// }

import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type IconProps = ReactSpanProps & {
  name: string;
};

// prettier-ignore
export const Icon: FC<IconProps> = ({name, className:_classname, ...props}) => {
  const className = ['material-icons', _classname].join(' ');
  return <span {...props} className={className}>{name}</span>
}
