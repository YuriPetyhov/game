//import "./Graphics.less";
import cn from "classnames";
import {IComponentClassName} from "../interfaces";
// JSX.DOMAttributes<EventTarget>
// TODO: reuse DomAttributes in span
type GraphicsProps = {svg: string | any; name: string, inline?: boolean} & IComponentClassName;
export const Graphics = (props: GraphicsProps) =>
    props.inline || typeof props.inline === "undefined" ? (
        <span
            className={cn(props.className, "icon")}
            dangerouslySetInnerHTML={{__html: props.svg.default}}
        />
    ) : (
        <span className={cn(props.className, "icon")}>
            <svg
                dangerouslySetInnerHTML={{
                    __html: `<use xlink:href="#${props.svg.id}_${props.name}" />`
                }}
             
            />
        </span>
    );
