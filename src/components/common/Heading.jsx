const Heading = (props) => {
    const {title} = props
    return (
        <>
            <h2 className="heading" data-aos="zoom-in-down">{title}</h2>
        </>
    )
}
export default Heading