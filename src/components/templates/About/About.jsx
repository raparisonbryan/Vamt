import styles from "./About.module.scss";

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>A propos de Vam't</h2>
                <p>Vam’t SARL est une société à taille humaine, où la convivialité est au cœur de notre engagement envers nos clients.</p>
                <p>
                    Nous sommes une entreprise fièrement malgache, qui s'est engagée à fournir à ses clients des services de location de voitures
                    de qualité supérieure avec une touche personnelle. Que vous ayez besoin d'une voiture pour explorer les rues d’Antananarivo,
                    ou que vous souhaitiez découvrir les paysages spectaculaires de l'île, nous avons le véhicule parfait pour répondre à vos
                    besoins.
                </p>
                <p>
                    Nous sommes une entreprise familiale et nous considérons chacun de nos clients comme faisant partie de notre famille.
                    Nous sommes là pour vous aider à tout moment, pour répondre à toutes vos questions et pour vous conseiller sur les meilleurs 
                    endroits à visiter à Madagascar.
                </p>
                <p>
                    En choisissant notre entreprise de location de voitures familiale à Madagascar, vous êtes sûr de bénéficier d'un service 
                    exceptionnel et d'une touche personnelle. Nous sommes là pour vous aider à rendre votre voyage inoubliable. Contactez nous 
                    dès maintenant pour réserver votre véhicule et commencez à planifier votre aventure à Madagascar dès aujourd'hui !
                </p>
            </div>
        </>
    );
}