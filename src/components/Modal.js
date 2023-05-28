import React from "react";

export default function modal({dias, totalBruto, totalNeto, opcion, antiguedad, dia, hora100dia, 
                                viatico, comida, sueldoBasicoACobrar, especialidad, viaticoPorMes,
                                comidaPorMes, deducciones, anios}) {

 opcion = parseFloat(opcion);

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                Más detalles
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            Sueldo Básico: <b> $<span>{opcion.toFixed(2)}</span></b> <br/><br/>
                Antigüedad: <b> $<span>{antiguedad.toFixed(2)}</span></b> <br/><br/>
                Valor del Día trabajado: <b> $<span>{dia.toFixed(2)}</span></b> <br/><br/>
                Total de Horas extras al 100%: <b> $<span>{hora100dia.toFixed(2)}</span></b> <br/><br/>
                Viático por día: <b> $<span>{viatico.toFixed(2)}</span></b> <br/><br/>
                Comida por día: <b> $<span>{comida.toFixed(2)}</span></b> <br/><br/>
                Sueldo: <b> $<span>{sueldoBasicoACobrar.toFixed(2)}</span></b> <br/><br/>
                especialidad: <b> $<span>{especialidad.toFixed(2)}</span></b> <br/><br/>
               <h5>Total a cobrar Bruto: <b className="bruto"> $<span >{totalBruto.toFixed(2)}</span></b> <br/><br/></h5>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Ver Neto a cobrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Neto a cobrar
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            Total Viático: <b> $<span>{viaticoPorMes.toFixed(2)}</span></b> <br/><br/>
                Total comida: <b> $<span>{comidaPorMes.toFixed(2)}</span></b> <br/><br/>
               <div id="vaca"></div>
                Deducciones: <b className="deducciones"> $-<span>{deducciones.toFixed(2)}</span></b> <br/><br/>
               <h5> Total a cobrar Neto: <b className="bruto"> $<span>{totalNeto.toFixed(2)}</span></b></h5> <br/><br/>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div >
      <div class="d-grid gap-2 mt-5 mb-3">
      <button
        class="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
        disabled={(dias > 30 || dias < 0 || dias === '')||(anios > 50 || anios < 0 || anios === '')||(opcion == 0)}
      >
        Más Detalles...
      </button>
      </div>
      
    </div>
  );
}
