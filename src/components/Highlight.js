import React, { Component } from "react";
import Newsletter from "./Newsletter";

import { FaRegComments, FaPaintBrush, FaChartLine, FaStream, FaBoxes, FaRegHandshake} from "react-icons/fa";

export class Highlight extends Component {
  render() {
    return (
      <div className="highlight">
        <div className="help">
          <h1>How can I Help You ?</h1>
          <p>
            Our work targeted, best practices outcomes social innovation
            synergy.
          </p>
          <p>
            Ventur Philanthropy, revolutianory inclusive policymaker relief.
          </p>
          <p>User-centered program area scale.</p>
        </div>
        <div className="grid">
          <div className="card">
            <FaRegComments className="icon"/>
            <h3>Consult</h3>
            <p>
              Co-create, design thinking; strengthen infrastructure resist
              granular. Revolution circular, movements or framework social
              impact low-hanging fruit. Save the world compelling revolutionary
              progress.
            </p>
          </div>
          <div className="card">
            <FaPaintBrush className="icon"/>
            <h3>Design</h3>
            <p>
              Policymaker collaborates collective impact humanitarian shared
              value vocabulary inspire issue outcomes agile. Overcome injustice
              deep dive agile issue outcomes vibrant boots on the ground
              sustainable.
            </p>
          </div>
          <div className="card">
            <FaBoxes className="icon"/>
            <h3>Develop</h3>
            <p>
              Revolutionary circular, movements a or impact framework social
              impact low- hanging. Save the compelling revolutionary inspire
              progress. Collective impacts and challenges for opportunities of
              thought provoking.
            </p>
          </div>
          <div className="card">
            <FaRegHandshake className="icon"/>
            <h3>Marketing</h3>
            <p>
              Peaceful; vibrant paradigm, collaborative cities. Shared
              vocabulary agile, replicable, effective altruism youth. Mobilize
              commitment to overcome injustice resilient, uplift social
              transparent effective.
            </p>
          </div>
          <div className="card">
            <FaStream className="icon"/>
            <h3>Manage</h3>
            <p>
              Change-makers innovation or shared unit of analysis. Overcome
              injustice outcomes strategize vibrant boots on the ground
              sustainable. Optimism, effective altruism invest optimism
              corporate social.
            </p>
          </div>
          <div className="card">
            <FaChartLine className="icon"/>
            <h3>Evolve</h3>
            <p>
              Activate catalyze and impact contextualize humanitarian. Unit of
              analysis overcome injustice storytelling altruism. Thought
              leadership mass incarceration. Outcomes big data, fairness, social
              game-changer. .
            </p>
          </div>
        </div>
      <Newsletter />

      </div>
    );
  }
}

export default Highlight;
