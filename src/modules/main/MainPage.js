import React, { ChangeEvent, useState } from 'react';
import styles from './MainPage.module.css';
import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';

export default function MainPage() {
    const [tempoSim, setTempo] = useState(0);

    const [tipoTec, setTipoTEC] = useState('');
    const [tec, setTEC] = useState(0);
    const [mediaTEC, setMediaTEC] = useState('');
    const [varianciaTEC, setVarianciaTEC] = useState('');

    const [tipoTs, setTipoTS] = useState('');
    const [ts, setTS] = useState(0);
    const [mediaTS, setMediaTS] = useState('');
    const [varianciaTS, setVarianciaTS] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        let tabela = []
        let tc = 0, tf = 0, tis = 0, tfs = 0, tcs = 0, tl = 0, tc_antes = 0, tfs_antes = 0
        let experimento = 1
        let temposimulacao = parseInt(tempoSim)
        let tecint = parseInt(tec)
        let tsint = parseInt(ts)

        for( let i = 0; i < temposimulacao ; i++ ){
            // if ( tipoTec === "deterministico" ) {
            //     tec = tec
            // } else if ( tipoTec === "normal" ) {
            //     tec = ?
            // } else { //exponencial
            //     tec = ?
            // }

            // if ( tipoTs === "deterministico" ) {
            //     ts = ts
            // } else if ( tipoTs === "normal" ) {
            //     ts = ?
            // } else { // exponencial
            //     ts = ?
            // }

            if ( i === 0 ) {
                tc = tecint
                tf = 0
                tis = tecint
                tfs = tecint+tsint
                tcs = tfs-tis
                tl = tecint
            } else {
                tc = tc_antes+tecint

                if ( tfs_antes > tc ) {
                    tf = tfs_antes-tc
                } else {
                    tf = 0
                }
                tis = tc+tf
                tfs = tis+tsint
                
                tcs = tfs-tis+tf

                if ( tf > 0 ) {
                    tl = 0
                } else {
                    tl = tc-tfs_antes
                }
            }
            tabela.push([experimento, tecint, tc, tf, tsint, tis, tfs, tcs, tl])

            tfs_antes = tfs
            tc_antes = tc

            i = i + tcs
            experimento = experimento + 1

        }

        console.log(tabela)
        // alert('Acho que vou ficar aqui mesmo');
    }

    function handleChangeTipoTEC(value) {
        setTipoTEC(value);
    }

    function handleChangeTipoTS(value) {
        setTipoTS(value);
    }

    function handleChangeTEC(value) {
        setTEC(value);
    }

    function handleChangeMediaTEC(value) {
        setMediaTEC(value);
    }

    function handleChangeVarianciaTEC(value) {
        setVarianciaTEC(value);
    }

    function handleChangeTS(value) {
        setTS(value);
    }

    function handleChangeMediaTS(value) {
        setMediaTS(value);
    }

    function handleChangeVarianciaTS(value) {
        setVarianciaTS(value);
    }
    
    return (
        <div className={styles.gridContainer}>
            <div className={styles.header}>Simulador MM1</div>

            <form onSubmit={handleSubmit} className={styles.params}>
                <div className={styles.paramsheader}>
                    <label className={styles.labelSimulacao}>Tempo de Simulação</label>
                    <input 
                    placeholder="em minutos"
                    className={styles.tempoSimulacao} 
                    id="tempoSim" value={tempoSim} 
                    onChange={e => setTempo(e.target.value)} 
                    />
                </div>

                <div className={styles.params1}>
    

                    <div>
                        <label>Tempo entre Chegadas</label>
                        <select className={styles.colInput} onChange={e => handleChangeTipoTEC(e.target.value)}>
                            <option id="tipoTec" name="tipoTec" defaultValue="">Selecione...</option>
                            <option id="tipoTec" name="tipoTec" value="deterministico">Determinístico</option>
                            <option id="tipoTec" name="tipoTec" value="normal">Aleatório Normal</option>
                            <option id="tipoTec" name="tipoTec" value="exponencial">Aleatório Exponencial</option>
                        </select>
                    </div>

                    {tipoTec === "deterministico" &&
                        <div>
                            <label>Tempo entre as chegadas</label>
                            <input 
                            className={styles.colInput}
                            type="number"
                            min="1"
                            max="999"
                            placeholder="em minutos" 
                            onChange={e => handleChangeTEC(e.target.value)}
                            />
                        </div>
                    }
                    {tipoTec === "normal" &&
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            placeholder="tempo em minutos" 
                            onChange={e => handleChangeMediaTEC(e.target.value)}/>
                        </div>
                    }
                    {tipoTec === "exponencial" &&
                    <div>
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            id="mediaexp"
                            placeholder="tempo em minutos" 
                            onChange={e => handleChangeMediaTEC(e.target.value)}/>
                        </div>

                        <div>
                            <label>Variância</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            id="stdexp"
                            placeholder="tempo em minutos" 
                            onChange={e => handleChangeVarianciaTEC(e.target.value)}/>
                        </div>
                    </div>
                    }
                </div>

                <div className={styles.params2}>
                    <div>
                        <label>Tempo de Serviço</label>
                        <select className={styles.colInput} onChange={e => handleChangeTipoTS(e.target.value)}>
                            <option id="tipoTs" name="tipoTs" defaultValue="">Selecione...</option>
                            <option id="tipoTs" name="tipoTs" value="deterministico">Determinístico</option>
                            <option id="tipoTs" name="tipoTs" value="normal">Normal</option>
                            <option id="tipoTs" name="tipoTs" value="exponencial">Exponencial</option>
                        </select>
                    </div>

                    {tipoTs === "deterministico" &&
                        <div>
                            <label>Tempo de Serviço</label>
                            <input 
                            className={styles.colInput}
                            type="number"
                            min="1"
                            max="999"
                            placeholder="em minutos" 
                            onChange={e => handleChangeTS(e.target.value)}/>
                        </div>
                    }
                    {tipoTs === "normal" &&
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            placeholder="tempo em minutos" 
                            onChange={e => handleChangeMediaTS(e.target.value)}/>
                        </div>
                    }
                    {tipoTs === "exponencial" &&
                    <div>
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            id="mediaexp"
                            placeholder="tempo em minutos" 
                            onChange={e => handleChangeMediaTS(e.target.value)}/>
                        </div>

                        <div>
                            <label>Variância</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            id="stdexp"
                            placeholder="tempo em minutos"
                            onChange={e => handleChangeVarianciaTS(e.target.value)} />
                        </div>
                    </div>
                    }
                </div>
                
                <div className={styles.paramsSubmit}>
                    <input type="submit" value="Ir" />
                </div>
            </form>

            <div className={styles.statistics}>
                <div className={styles.charts}>
                    <div className={styles.chart1}>Gráfico<Chart /></div>
                    <div className={styles.chart2}>Gráfico<Chart /></div>
                    <div className={styles.chart3}>Gráfico<Chart /></div>
                    <div className={styles.chart4}>Gráfico<Chart /></div>
                </div>
                <div className={styles.tableContainer}>
                    Tabela de Simulação
                    <div className={styles.table}>
                        <Table/>
                    </div>
                </div>
            </div>
            
            <div className={styles.footer}>
                Desenvolvido por Lorena e Victor Hugo
            </div>
        
        </div>
    );
}