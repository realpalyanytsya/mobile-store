import { t } from "i18next";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDeviceColor, IDeviceImage } from "../../types";
import ItemColors from "../ItemColors/ItemColors";
import ItemImageSlider from "../ItemImageSlider/ItemImageSlider";
import st from "./ProductGridView.module.scss";

interface ProductGridViewProps {
    fullTitle: string;
    images: IDeviceImage[];
    colors: IDeviceColor[];
    price: string;
    slug: string;
}

const ProductGridView: FC<ProductGridViewProps> = ({
    fullTitle,
    images,
    colors,
    price,
    slug,
}) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <div className={st.root}>
            <ItemImageSlider images={images} slug={slug} />

            <ItemColors colors={colors} />

            <div className={st.stats}>
                <h2 onClick={() => navigate(`./${slug}`)}>{fullTitle}</h2>

                <div className={st.root__bottom}>
                    <h4>{`${t("from")} ${price}₴`}</h4>

                    <div className={st.icons} onClick={() => setShow(!show)}>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512.18 512.18"
                        >
                            <path
                                d="M512.825,170.884c-0.14-1.786-0.298-3.155-0.44-4.095C505.22,85.648,445.691,21.423,368.434,21.423
				c-43.806,0-84.286,25.204-111.378,63.119c-27.017-37.956-67.294-63.119-111.086-63.119c-76.994,0-136.385,63.79-144.033,145.827
				c-0.147,0.956-0.295,2.12-0.43,3.489c-1.307,13.254-0.22,30.816,4.831,52.214c10.732,45.463,35.828,86.871,71.224,118.958
				l165.487,143.624c8.015,6.956,19.925,6.963,27.948,0.015l165.483-143.296c39.184-40.771,62.443-77.41,71.666-119.627
				C512.771,201.424,513.848,183.977,512.825,170.884z M466.46,213.526c-7.254,33.204-26.552,63.603-59.352,97.843L257.052,441.195
				l-151.18-131.201C77.095,283.9,56.57,250.033,47.863,213.151c-3.953-16.747-4.747-29.585-3.895-38.225
				c0.075-0.764,0.393-3.072,0.393-3.072C49.849,110.077,92.478,64.09,145.97,64.09c37.132,0,73.538,29.964,91.407,72.297
				c7.338,17.382,31.97,17.382,39.308,0c17.82-42.214,54.532-72.297,91.749-72.297c53.494,0,96.121,45.99,101.609,107.786
				c0.147,1.242,0.187,1.586,0.245,2.333C470.993,183.234,470.174,196.504,466.46,213.526z"
                            />
                            <g
                                className={`${show ? st.heart : ""}`}
                                fill="none"
                            >
                                <path d="M370.994,49.998c-61.509,0-112.296,45.894-119.994,105.306    c-7.698-59.412-58.485-105.306-119.994-105.306C64.176,49.998,10,104.174,10,171.004s80.283,135.528,116.45,166.574    C160.239,366.582,251,452.002,251,452.002s90.761-85.42,124.55-114.424C411.717,306.532,492,237.834,492,171.004    S437.824,49.998,370.994,49.998z" />
                                <path d="M251,462.002c-2.464,0-4.928-0.906-6.854-2.718c-0.906-0.853-90.981-85.595-124.21-114.119l-0.348-0.299    C80.771,311.548,0,242.216,0,171.004C0,98.767,58.769,39.998,131.006,39.998c52.959,0,99.547,31.914,119.994,78.382    c20.446-46.468,67.035-78.382,119.994-78.382C443.231,39.998,502,98.767,502,171.004c0,71.211-80.771,140.543-119.588,173.862    l-0.348,0.299c-33.231,28.525-123.304,113.266-124.21,114.119C255.928,461.096,253.464,462.002,251,462.002z M131.006,59.998    C69.797,59.998,20,109.795,20,171.004c0,62.021,78.917,129.761,112.615,158.687l0.348,0.299    c28.14,24.155,96.205,87.815,118.037,108.294c21.832-20.479,89.897-84.139,118.037-108.294l0.348-0.299    C403.083,300.765,482,233.025,482,171.004c0-61.209-49.797-111.006-111.006-111.006c-55.619,0-102.941,41.525-110.077,96.591    c-0.646,4.984-4.891,8.715-9.917,8.715s-9.271-3.73-9.917-8.715C233.948,101.523,186.625,59.998,131.006,59.998z" />
                            </g>
                        </svg>

                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 176.26 176.26"
                        >
                            <path
                                transform="rotate(0 100 100)"
                                d="M67.346,136.988c-10.826,0-19.635,8.808-19.635,19.633c0,10.829,8.809,19.639,19.635,19.639s19.635-8.81,19.635-19.639
		C86.98,145.796,78.172,136.988,67.346,136.988z M67.346,164.26c-4.21,0-7.635-3.427-7.635-7.639c0-4.209,3.425-7.633,7.635-7.633
		s7.635,3.424,7.635,7.633C74.98,160.833,71.556,164.26,67.346,164.26z"
                            />
                            <path
                                d="M134.533,136.988c-10.826,0-19.635,8.808-19.635,19.633c0,10.829,8.809,19.639,19.635,19.639
		c10.828,0,19.637-8.81,19.637-19.639C154.17,145.796,145.361,136.988,134.533,136.988z M134.533,164.26
		c-4.21,0-7.635-3.427-7.635-7.639c0-4.209,3.425-7.633,7.635-7.633c4.211,0,7.637,3.424,7.637,7.633
		C142.17,160.833,138.744,164.26,134.533,164.26z"
                            />
                            <path
                                d="M152.81,134.525l23.257-89.434H38.215l-6.712-25.813H0.193v12h22.03l26.848,103.246H152.81z M114.898,82.902v13.813H86.98
		V82.902H114.898z M86.98,70.902v-13.81h27.918v13.81H86.98z M126.898,82.902h26.936l-3.592,13.813h-23.344V82.902z
		 M114.898,108.715v13.811H86.98v-13.811H114.898z M74.98,96.715H51.639l-3.592-13.813H74.98V96.715z M54.76,108.715H74.98v13.811
		h-16.63L54.76,108.715z M126.898,122.525v-13.811h20.224l-3.592,13.811H126.898z M156.955,70.902h-30.057v-13.81h33.648
		L156.955,70.902z M74.98,57.092v13.81H44.926l-3.591-13.81H74.98z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGridView;
