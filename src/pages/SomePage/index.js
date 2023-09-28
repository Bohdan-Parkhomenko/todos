import './styles.css'
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, takeCashAction} from "../../store/cashReducer";


const SomePage = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)


    const handleAddClickNumber = () => {
        dispatch(addCashAction(1))
    }
    const handleOnGetClickNumber = () => {
        dispatch(takeCashAction(1))
    }

    return (
        <div className={"some-project-container"}>
            <button
                className={"button"}
                onClick={handleAddClickNumber}
            >
                number + 1
            </button>

            <button
                className={"button"}
                onClick={handleOnGetClickNumber}
            >
                number - 1
            </button>
            <label className="label">
                {cash}
            </label>
        </div>
    )
}
export default SomePage;