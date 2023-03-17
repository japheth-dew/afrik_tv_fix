import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as Billing } from '../assets/icons/billing.svg'
import { ReactComponent as Cog } from '../assets/icons/cog.svg'
import { ReactComponent as Activities } from '../assets/icons/activities.svg'
import { ReactComponent as TV } from '../assets/icons/tv.svg'
import { ReactComponent as Clock } from '../assets/icons/clock.svg'
import { ReactComponent as PlayBox } from '../assets/icons/play-box.svg'
import { ReactComponent as Back } from '../assets/icons/back.svg'
import { ReactComponent as Wave } from '../assets/icons/wave.svg'
import { ReactComponent as Bell } from '../assets/icons/bell.svg'
import { ReactComponent as Person } from '../assets/icons/person.svg'
import { ReactComponent as ChevronRight } from '../assets/icons/chevron-right.svg'

const ICONS = {
	home: Home,
	billing: Billing,
	cog: Cog,
	activities: Activities,
	tv: TV,
	clock: Clock,
	playBox: PlayBox,
	back: Back,
	wave: Wave,
	bell: Bell,
	person: Person,
	chevronRight: ChevronRight,
}

const Oops = () => (
	<span className="w-6 h-6 font-bold justify-center items-center">?</span>
)

const Icon = ({ name, ...props }) => {
	const Component = ICONS[name] || Oops
	return <Component {...props} />
}

export default Icon
