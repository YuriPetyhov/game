import { IComponentClassName } from '../interfaces'
import icons from '../svg/icons.svg'
import { Graphics } from './Graphics'

const ico = (svg: any, name:string, props:IComponentClassName) => <Graphics svg={svg} className={props.className} name={name} inline={false}   />

export const SVG = {
    Close: (props: IComponentClassName) => ico(icons, 'close', props),
    Menu: (props: IComponentClassName) => ico(icons, 'menu', props)
}