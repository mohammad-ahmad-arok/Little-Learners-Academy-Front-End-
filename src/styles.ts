const styles = {
    heading: "font-[700] sm:text-[39px] text-[30px] sm:leading-[80px] leading-[46px]",
    paragraph: "font-[400] text-dimBlack text-[15px] sm:leading-[26px] leading-[20px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-[4.4rem] px-5",
    paddingY: "sm:py-[5.6rem] py-16",

    marginX: "sm:mx-[4.4rem] mx-5",
    marginY: "sm:my-[5.6rem] my-16",
};

export const layout = {
    cardContainer: 'flex flex-row flex-wrap items-center justify-center',
    section: `flex flex-col  ${styles.paddingY} ${styles.paddingX}`,
};

export default styles;