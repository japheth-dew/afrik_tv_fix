import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => (
	<>
		<Navbar />
		<div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
			<aside className="lg:block fixed z-20 inset-0 top-[4.375rem] left-[max(0px,calc(50%-45rem))] right-auto w-[5rem] lg:w-[19.5rem] pb-10 lg:px-8 overflow-y-auto">
				<Sidebar />
			</aside>
			<div className="lg:pl-[19.5rem] pt-8">{children}</div>
		</div>
	</>
)

export default Layout
