import React from 'react'
import Image from "next/image";

export const Grid = () => {
      return (
            <div className="grid">
                  <div className="item">
                        <h3 className="name">Color Picker Couto Décoration (nov 2021)</h3>
                        <div className="imageWrapper">
                              <Image
                                    src="/Color-Picker.png"
                                    alt="Projet 1"
                                    fill
                                    className="image"
                              />
                        </div>
                        <p className="description">
                              Ce color picker permet de classer et de choisir des couleurs en fonction de leur teinte et saturation (sur un choix de 2000 couleurs). Il s'agit d'un projet de stage réalisé chez KauryWeb.
                        </p>
                        <div className="linkWrapper">
                              <a href="https://color-picker1997.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn">🌐 URL de l'app</button>
                              </a>
                        </div>
                        <div className="linkWrapper">
                              <a href="https://github.com/RudyRadis/ColorPicker" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn__gitHub">💻 GitHub</button>
                              </a>
                        </div>
                  </div>

                  <div className="item">
                        <h3 className="name">Mercadona (dec 2023)</h3>
                        <div className="imageWrapper">
                              <Image
                                    src="/Mercadona.png"
                                    alt="Projet 2"
                                    fill
                                    className="image"
                              />
                        </div>
                        <p className="description">
                              Mercadona est une application web conçue pour la société de distribution Mercadona. Elle est hébergée sur Heroku. Elle permet à l'utilisateur de consulter le catalogue des produits proposés par Mercadona. Ce projet est un sujet d'examen dans le cadre de la formation STUDI Bachelor Développeur d'applications web/mobile.
                        </p>
                        <div className="linkWrapper">
                              <a href="https://secret-falls-68265-e0e831d6abcf.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn">🌐 URL de l'app</button>
                              </a>
                        </div>
                        <div className="linkWrapper">
                              <a href="https://github.com/RudyRadis/Mercadona3" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn__gitHub">💻 GitHub</button>
                              </a>
                        </div>
                  </div>





                  <div className="item">
                        <h3 className="name">Projet Phi-Lux (site vitrine, nov 2024)</h3>
                        <div className="imageWrapper">
                              <Image
                                    src="/Phi-Lux site vitrine.png"
                                    alt="Projet 3"
                                    fill
                                    className="image"
                              />
                        </div>
                        <p className="description">
                              Le site vitrine de l'application Phi-Lux. Une application éducative centrée sur les mathématiques. Il s'agit d'un projet personnel développé dans un cadre professionnel et destiné à être monétisé.
                        </p>
                        <div className="linkWrapper">
                              <a href="https://phi-lux-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn">🌐 URL de l'app</button>
                              </a>
                        </div>
                        <div className="linkWrapper">
                              <a href="https://github.com/RudyRadis/Phi-Lux-alpha" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn__gitHub">💻 GitHub</button>
                              </a>
                        </div>
                  </div>



                  <div className="item">
                        <h3 className="name">Projet Phi-Lux (app mobile, en cours)</h3>
                        <div className="imageWrapper">
                              <Image
                                    src="/Logo Phi-Lux.png"
                                    alt="Projet 4"
                                    fill
                                    className="image"
                              />
                        </div>
                        <p className="description">
                              L'application mobile du projet Phi-Lux. Une application mobile éducative destinée à améliorer l'apprentissage des mathématiques chez les élèves. Il s'agit d'un projet personnel développé dans un cadre professionnel et destiné à être monétisé.
                        </p>
                        <div className="linkWrapper">
                              <a href="https://youtube.com/shorts/sDoCQ-sddi8" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn__youtube">▶️ Vidéo de présentation</button>
                              </a>
                        </div>
                        <div className="linkWrapper">
                              <a href="https://github.com/RudyRadis/phi-lux-0.2" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn__gitHub">💻 GitHub</button>
                              </a>
                        </div>
                  </div>
            </div>
      )
}
