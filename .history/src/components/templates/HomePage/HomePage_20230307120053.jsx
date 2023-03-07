import styles from "./HomePage.module.scss";
import TextArea from "@elements/TextArea/TextArea";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
        
            <div className={styles.container}>
                
                <TextArea 
                title="What is the Up2HF project?"
                text="The Up2HF project was created by researchers in Centrale Lyon and INSA Lyon, France in order to facilitate the diffusion of knowledge on high frequency vibroacoustics to students, researchers and engineers willing to learn more on this subject."
                />
                
                <div className={styles.textContainer}>
                    <div className={styles.content}>

                        <div className={styles.title}>A word on vibroacoustics</div>
                        <div className={styles.text}>
                            Vibroacoustics is the study of vibrations of structures excited by an exterior force and/or an injected power. 
                        </div>
                        <div className={styles.text}>
                            In order to study these vibrations and predict the behavior of the structure we usually use the finite element method. This method consists of applying the governing equations on smaller elements in the system. However, this method is limited: the higher the studied frequency, the higher the number of degrees of freedom are and thus the longer it takes to compute.
                            As such, due to limited capabilities of computers, a high frequency calculation limit appears depending on the system’s structural complexity.
                        </div>
                        <div className={styles.text}>
                            As such, due to limited capabilities of computers, a high frequency calculation limit appears depending on the system’s structural complexity.
                        </div>
                        
                        <div className={styles.tab}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Structure</th>
                                        <th>Car</th>
                                        <th>Aircraft</th>
                                        <th>Ship</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Frequency</td>
                                        <td>≈500 Hz</td>
                                        <td>≈50 Hz</td>
                                        <td>≈5 Hz</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className={styles.text}>
                            The initial derivation of SEA arose in 1959 by Richard Lyon and Preston Smith as part of work concerned with the development of methods for analyzing the response of large complex aerospace structures subjected to spatially distributed random loading.
                        </div>

                        <Image
                        src="/assets/images/test.gif"
                        width={50}
                        height={550}
                        />
                        

                        <div className={styles.text}>
                            Lyon's calculation showed that under certain conditions, the flow of energy between two coupled oscillators is proportional to the difference in the oscillator energies (suggesting a thermal analogy exists in structural-acoustic systems).
                        </div>

                        <div className={styles.text}>
                            However, these conditions greatly restrict the use of SEA. Indeed, as seen in the validity diagram, the domain of application of SEA is restricted to low coupling and diffuse fields.
                        </div>

                        <div className={styles.image}>
                            <img src="./assets/images/homeGraph.png" alt="homeGraph"/>
                        </div>
                        
                        <div className={styles.text}>
                            Since then, other methods were created in order to extend this domain, such as radiative transfer energy method with a discretization of the border or Statistical Modal Energy Deformation Analysis which neglect the diffuse field condition of SEA.
                        </div>
                    </div>
                </div>              
            </div>
        
        </>
    )
}