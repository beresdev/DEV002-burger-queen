export function TablesForm({settingTable}) {
    return (
        <form action="#">
            <label htmlFor="table">Table: </label>
            <select name="tables" id="table" onChange={(e) => settingTable(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </form>
    )
}