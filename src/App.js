import React, { Component } from "react";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      harga_awal: null,
      ppn: null,
      diskon: null,
      harga_akhir: null
    }
  }

  Hitung = () => {
    let harga_awal = this.state.harga_awal;
    let ppn = this.state.ppn;
    let diskon = this.state.diskon;
    let harga_akhir = (harga_awal - (diskon/100 * harga_awal)) + (ppn/100 * harga_awal);
    this.setState({
      harga_akhir
    });
  }

  changeHarga = (event) => {
    this.setState({
      harga_awal: event.target.value
    });
  }

  changePPN = (event) => {
    this.setState({
      ppn: event.target.value
    });
  }

  changeDiskon = (event) => {
    this.setState({
      diskon: event.target.value
    });
  }

  render() {
    return (
      <div className="App-header">
        <div className="container col-md-6 pt-3">
          <div className="card-header bg-danger text-center text-white">
            <h3>Hitung Harga Akhir</h3>
          </div>
          <div className="card-body">
            <div className="form-group mb-3">
              <label>Harga awal :</label>
              <input type="number" className="form-control" onChange={this.changeHarga}></input>
            </div>
            <div className="form-group mb-3">
              <label>PPN :</label>
              <input type="number" className="form-control" onChange={this.changePPN}></input>
            </div>
            <div className="form-group mb-3">
              <label>Diskon :</label>
              <input type="number" className="form-control" onChange={this.changeDiskon}></input>
            </div>
            <div className="form-group mb-3">
              <button className="btn btn-danger form-control" onClick={this.Hitung}>Hitung</button>
            </div>
            <div class="card-footer">
            <h5 className="alert alert-success">Rp.{this.state.harga_akhir},00</h5>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;