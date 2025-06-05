/* eslint-disable @typescript-eslint/no-explicit-any */
// App.tsx
import './App.css';
import Header from './components/Header';
import BackgroundBlock from './components/BackgroundBlock';
import Footer from './components/Footer';
import FormContainer from './components/FormContainer';
import { useState } from 'react';
import { calculateOrundum } from './utils/calculator';

import Cherry from './components/Cherry';
import orundumIcon from './assets/orundum.ico';
import opIcon from './assets/op.ico';
import headhuntIcon from './assets/headhunt.ico';
import { ResultRow } from './components/ResultRow';

function App() {

  const [formData, setFormData] = useState({
    currentOrundum: '',
    annihilationCap: '',
    endDate: '',
    sparkCap: '',
    includeMissions: false,
    includeMembership: false,
    willSpendOp: false,
    opAmount: '',
    showExtender: false,
    shards: '',
    pulls: '',
  });

  const updateField = (field: keyof typeof formData, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const results = calculateOrundum(formData);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Cherry />

      <BackgroundBlock>
        <hr className="border-t border-orundum m-5" />
        <FormContainer formData={formData} updateField={updateField} />
        <hr className="border-t border-orundum m-5" />

      <div className="space-y-2 text-sm font-mono">
        <div>
          <b>Days until End Date</b> <span className="float-right">{results.daysRemaining}</span>
        </div>
      <div>
        <b>Weeks until End Date</b> <span className="float-right">{results.weeksRemaining}</span>
      </div>

      <div className="mt-4">
        <ResultRow
          label="Annihilation Orundum Total"
          value={results.anniOrundum.toLocaleString()}
          icon={orundumIcon}
        />
      </div>
        <div>
          <ResultRow
            label="Mission Orundum Total"
            value={results.missionsOrundum.toLocaleString()}
            icon={orundumIcon}
          />
        </div>
      <div>
        <ResultRow
          label="Monthly Card Orundum Total"
          value={results.membershipOrundum.toLocaleString()}
          icon={orundumIcon}
        />
      </div>

      <hr className="border-t border-orundum m-5" />
      <div className="mt-4 text-lg font-bold">
        Total Expected Orundum <span className="float-right">{results.totalOrundum.toLocaleString()}</span>
      </div>
      <div className="text-lg font-bold">
        Total Pulls <span className="float-right">{results.totalPulls}</span>
      </div>

      {results.sparkCap > 0 && (
        <div className="mt-6 space-y-1">
          <div>
            <b>Will you reach Spark?</b> <span className="float-right">{results.willReachSpark ? "Yes" : "No"}</span>
            <div className="text-xs text-gray-400">Will you reach the spark from Orundum farming alone?</div>
          </div>
          <div>
            <ResultRow
            label="Pulls needed for Spark"
            value={results.pullsNeededForSpark.toLocaleString()}
            icon={headhuntIcon}
            description="Additional Orundum needed to reach desired spark"
            />
          </div>
            <ResultRow
              label="Orundum needed for Spark"
              value={results.orundumNeededForSpark.toLocaleString()}
              icon={orundumIcon}
              description="Additional Orundum needed to reach desired spark"
            />
          <div>
            <ResultRow
              label="Originite Prime needed for Spark"
              value={results.originitePrimeNeeded.toLocaleString()}
              icon={opIcon}
              description="Additional OP needed to reach desired spark (-1 if 'Will spend OP?' is not ticked)"
            />
          </div>
        </div>
      )}
      </div>

      </BackgroundBlock>
      <Cherry />
      <div className='text-xs flex items-center justify-center flex-col'>
        <p>Since this is a project more aimed towards me trying to build a website in a new environment with new languages, I didn't really get that far. Some orundum gain methods are for now missing, if you have some tips/ideas/whatever, contact me either on twitter or on discord, I'm active on both.</p>
        <p>Do check out the github repo to see progress (spoiler there's probably not a lot), or if there's not any, just get a pitchfork and a torch and come into my dms. 1v1 me bro.</p>
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default App;
