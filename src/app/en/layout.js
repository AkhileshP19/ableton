import AboutSubHeader from "@/components/about-sub-header"

const MainHeaderLayout = ({ children }) => {
    return (
        <div>
            <div className="p-8">
                <AboutSubHeader />
            </div>
            {children}
        </div>
    )
}

export default MainHeaderLayout