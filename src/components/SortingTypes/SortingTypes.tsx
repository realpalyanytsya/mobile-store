import { FC } from "react";
import { useSelector } from "react-redux";
import { sortingTypes } from "../../.config";
import { selectFilter, setSortingType } from "../../store/slices/filterSlice";
import { useAppDispatch } from "../../store/store";
import st from "./SortingTypes.module.scss";

const SortingTypes: FC = () => {
    const { sortingType } = useSelector(selectFilter);
    const dispatch = useAppDispatch();

    return (
        <div className={st.selectSort}>
            <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.2"
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z" />
            </svg>
            <p>Show: </p>
            <select
                value={sortingType}
                onChange={(e) => dispatch(setSortingType(e.target.value))}
            >
                {sortingTypes.map((i) => (
                    <option key={i.id} value={i.value}>
                        {i.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortingTypes;
