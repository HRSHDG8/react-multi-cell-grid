import Grid from "../grid/Grid";

class GridApi {
    constructor(private grid: Grid) { }

    getGridData() {
        return this.grid.state.data;
    }
    updateGrid() {
        this.grid.update();
    }
}
export default GridApi;