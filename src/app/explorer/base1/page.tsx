import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Step1() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60rem_60rem_at_70%_-10%,#6b46c1_0%,transparent_60%),radial-gradient(40rem_40rem_at_10%_20%,#2563eb_0%,transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-col items-start gap-6">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm tracking-wide">
                Étape 1 · Les bases
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
                Comprendre le <span className="text-indigo-400">B.A.-BA</span>{' '}
                du Machine Learning
              </h1>
              <p className="mx-auto max-w-6xl text-justify space-y-2 text-lg text-white/80">
                Le <strong>machine learning</strong> est une branche de
                l'intelligence artificielle qui consiste à créer des programmes
                capables d'<em>apprendre à partir de données</em>. Plutôt que de
                définir à la main toutes les règles possibles, on fournit des
                exemples : le système en déduit des modèles qui traduisent les
                régularités présentes dans ces données.
                <br />
                <br />
                Concrètement, un algorithme de ML ajuste automatiquement ses{' '}
                <em>paramètres</em> pour améliorer la qualité de ses
                prédictions. Il ne se contente pas d’appliquer un code figé : il
                évolue et se corrige en fonction de l’information qu’il reçoit.
                <br />
                <br />
                Cette approche permet de traiter des problèmes complexes où les
                règles sont trop nombreuses ou trop floues pour être programmées
                explicitement : reconnaître une image, traduire un texte,
                recommander un film, ou encore anticiper une panne.
              </p>
            </div>
          </div>
        </section>

        {/* 3 cards : what / types / pipeline */}
        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Qu’est-ce que c’est ?">
              <ul className="space-y-2 text-white/85">
                <li>
                  • Transformer des données en <strong>modèle</strong> capable
                  de généraliser.
                </li>
                <li>
                  • Objectif : <strong>minimiser l'erreur</strong> entre
                  prédictions et réalité.
                </li>
                <li>
                  • Mesure via une <strong>fonction de coût</strong> (loss).
                </li>
              </ul>
            </Card>

            <Card title="Les grands types">
              <ul className="space-y-2 text-white/85">
                <li>
                  • <strong>Supervisé</strong> : on connaît la bonne réponse
                  (ex. prix d’un logement, spam/ham).
                </li>
                <li>
                  • <strong>Non supervisé</strong> : on cherche des structures
                  (ex. clusters de clients).
                </li>
                <li>
                  • <strong>Renforcement</strong> : un agent apprend par{' '}
                  <em>récompense</em> (ex. jeu, robotique).
                </li>
              </ul>
            </Card>

            <Card title="Pipeline minimal">
              <ol className="list-decimal space-y-2 pl-5 text-white/85">
                <li>Définir le problème & la métrique.</li>
                <li>Préparer les données (nettoyage, features).</li>
                <li>Choisir un modèle de base.</li>
                <li>Entraîner / valider / itérer.</li>
                <li>
                  Tester puis <em>déployer</em>.
                </li>
              </ol>
            </Card>
          </div>
        </section>

        {/* Vocabulaire essentiel */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="mb-4 text-2xl font-semibold">Mots-clés à connaître</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ['dataset', 'Lot de données'],
              ['features', 'Variables explicatives'],
              ['label', 'Cible à prédire'],
              ['train / val / test', 'Découpage des données'],
              ['overfitting', 'Surapprentissage'],
              ['underfitting', 'Sous-apprentissage'],
              ['baseline', 'Point de départ simple'],
              ['metric', 'Moyen d’évaluer (MAE, RMSE, accuracy, F1…)'],
              ['regularisation', 'Technique anti-overfitting'],
              ['cross-validation', 'Validation croisée'],
            ].map(([k, v]) => (
              <Badge key={k} k={k} v={v} />
            ))}
          </div>
        </section>

        {/* Mini-exemple pédagogique */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="mb-6 text-2xl font-semibold">
            Mini-exemple : régression linéaire en 5 idées
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ol className="list-decimal space-y-3 pl-5 text-white/85">
                <li>
                  <strong>Problème</strong> : prédire le prix d’un logement
                  (label) à partir de sa surface et de sa localisation
                  (features).
                </li>
                <li>
                  <strong>Modèle</strong> :{' '}
                  <code className="rounded bg-black/40 px-1">y = w·x + b</code>{' '}
                  (une droite multidimensionnelle).
                </li>
                <li>
                  <strong>Loss</strong> : erreur quadratique moyenne (RMSE/
                  MSE).
                </li>
                <li>
                  <strong>Apprentissage</strong> : ajuster <code>w</code> et{' '}
                  <code>b</code> pour minimiser la loss (descente de gradient).
                </li>
                <li>
                  <strong>Validation</strong> : vérifier la généralisation sur
                  un set jamais vu (test).
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-white/80">Pseudocode ultra-compact :</p>
              <pre className="overflow-x-auto rounded-lg bg-black/60 p-4 text-sm leading-6">
                {`# Split: 70% train, 15% val, 15% test
init w, b
repeat until convergence:
  y_pred = w*x + b
  loss = MSE(y_true, y_pred)
  w = w - lr * dloss/dw
  b = b - lr * dloss/db
# Choisir les hyperparamètres (lr, regularisation) sur le set val
# Reporter la métrique finale sur le set test`}
              </pre>
              <p className="mt-3 text-sm text-white/60">
                Astuces : normaliser les features, commencer par une{' '}
                <em>baseline</em> (médiane, moyenne), tracer les résidus.
              </p>
            </div>
          </div>
        </section>

        {/* À retenir */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-semibold">
            À retenir avant de passer à la pratique
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              'Commencer simple (baseline) avant un modèle sophistiqué.',
              'Toujours séparer entraînement, validation et test.',
              'Une bonne métrique vaut mille impressions visuelles.',
              'L’overfitting se combat par données, régularisation et validation.',
              'Documenter ses hypothèses et décisions.',
              'Itérer par petites expériences, mesurer, décider.',
            ].map(t => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                <span className="text-white/85">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill>Étape suivante : Pratique</Pill>
            <Pill variant="blue">Objectif : entraîner un premier modèle</Pill>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ===== UI sous-composants locaux (simples, sans état) ===== */

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div>{children}</div>
    </div>
  )
}

function Badge({ k, v }: { k: string; v: string }) {
  return (
    <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
      <span className="text-sm font-medium">{k}</span>
      <span className="text-xs text-white/60 group-hover:text-white/80">
        — {v}
      </span>
    </div>
  )
}

function Pill({
  children,
  variant = 'indigo',
}: {
  children: React.ReactNode
  variant?: 'indigo' | 'blue'
}) {
  const base = 'rounded-full border px-3 py-1 text-sm'
  const theme =
    variant === 'blue'
      ? 'border-blue-500/30 bg-blue-500/10 text-blue-200'
      : 'border-indigo-500/30 bg-indigo-500/10 text-indigo-200'
  return <span className={`${base} ${theme}`}>{children}</span>
}
