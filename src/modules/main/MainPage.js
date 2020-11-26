import React, { ChangeEvent, useState } from 'react';
import styles from './MainPage.module.css';
import Chart from './components/Chart/Chart';

export default function MainPage() {
    const [tempoSim, setTempo] = useState('');

    const [tec, setTEC] = useState('');
    const [tempoChegada, setTempoChegada] = useState('');
    const [mediaTEC, setMediaTEC] = useState('');
    const [varianciaTEC, setVarianciaTEC] = useState('');

    const [ts, setTS] = useState('');
    const [tempoServico, setTempoServico] = useState('');
    const [mediaTS, setMediaTS] = useState('');
    const [varianciaTS, setVarianciaTS] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
    
        alert('Acho que vou ficar aqui mesmo');
    }

    function handleChangeTEC(value) {
        setTEC(value);
    }

    function handleChangeTS(value) {
        setTS(value);
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
                        <select className={styles.colInput} onChange={e => handleChangeTEC(e.target.value)}>
                            <option id="tec" name="tec" selected value="">Selecione...</option>
                            <option id="tec" name="tec" value="deterministico">Determinístico</option>
                            <option id="tec" name="tec" value="normal">Aleatório Normal</option>
                            <option id="tec" name="tec" value="exponencial">Aleatório Exponencial</option>
                        </select>
                    </div>

                    {tec === "deterministico" &&
                        <div>
                            <label>Tempo entre as chegadas</label>
                            <input 
                            className={styles.colInput}
                            type="number"
                            min="1"
                            max="999"
                            placeholder="em minutos" />
                        </div>
                    }
                    {tec === "normal" &&
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            placeholder="tempo em minutos" />
                        </div>
                    }
                    {tec === "exponencial" &&
                    <div>
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            id="mediaexp"
                            placeholder="tempo em minutos" />
                        </div>

                        <div>
                            <label>Variância</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            id="stdexp"
                            placeholder="tempo em minutos" />
                        </div>
                    </div>
                    }
                </div>

                <div className={styles.params2}>
                    <div>
                        <label>Tempo de Serviço</label>
                        <select className={styles.colInput} onChange={e => handleChangeTS(e.target.value)}>
                            <option id="ts" name="ts" selected value="">Selecione...</option>
                            <option id="ts" name="ts" value="deterministico">Determinístico</option>
                            <option id="ts" name="ts" value="normal">Normal</option>
                            <option id="ts" name="ts" value="exponencial">Exponencial</option>
                        </select>
                    </div>

                    {ts === "deterministico" &&
                        <div>
                            <label>Tempo de Serviço</label>
                            <input 
                            className={styles.colInput}
                            type="number"
                            min="1"
                            max="999"
                            placeholder="em minutos" />
                        </div>
                    }
                    {ts === "normal" &&
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            placeholder="tempo em minutos" />
                        </div>
                    }
                    {ts === "exponencial" &&
                    <div>
                        <div>
                            <label>Média</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            id="mediaexp"
                            placeholder="tempo em minutos" />
                        </div>

                        <div>
                            <label>Variância</label>
                            <input
                            className={styles.colInput}
                            type="number"
                            step="0.01"
                            id="stdexp"
                            placeholder="tempo em minutos" />
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
                    <div className={styles.chart1}><Chart />Gráfico</div>
                    <div className={styles.chart2}><Chart />Gráfico</div>
                    <div className={styles.chart3}><Chart />Gráfico</div>
                    <div className={styles.chart4}><Chart />Gráfico</div>
                </div>
                <div className={styles.tableContainer}>Tabela</div>
            </div>
            
            <div className={styles.footer}>
                Desenvolvido por Lorena e Victor Hugo
            </div>
        
        </div>
    );
}