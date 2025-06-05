import { Input } from './Input';
import { RadioButton } from './RadioButton';

type FormData = {
  currentOrundum: string;
  annihilationCap: string;
  endDate: string;
  sparkCap: string;
  includeMissions: boolean;
  includeMembership: boolean;
  willSpendOp: boolean;
  opAmount: string;
  showExtender: boolean;
  shards: string;
  pulls: string;
};

type FormContainerProps = {
  formData: FormData;
  updateField: (field: keyof FormData, value: string | boolean) => void;
};

export default function FormContainer({ formData, updateField }: FormContainerProps) {
  return (
    <form className="flex flex-col">
        <Input
            value={formData.currentOrundum}
            onChange={e => updateField('currentOrundum', e.target.value)}
            type="number"
            placeholder="Current Orundum"
            description="The amount of Orundum in your posession"
        />
        <Input
            type="date"
            placeholder="End Date"
            value={formData.endDate}
            onChange={e => updateField('endDate', e.target.value)}
            description="End date of your farm (little invisible calendar picker on the far right of the input)"
        />
        <Input
            type="number"
            placeholder="Annihilation Cap"
            value={formData.annihilationCap}
            onChange={e => updateField('annihilationCap', e.target.value)}
            description="Your current Orundum Annihilation cap"
        />

        <RadioButton
            label="Include Missions"
            value={formData.includeMissions}
            description="Daily and weekly missions"
            onToggle={() => updateField('includeMissions', !formData.includeMissions)}
        />
        <RadioButton
            label="Monthly card"
            value={formData.includeMembership}
            description="Include Monthly Card daily Orundum"
            onToggle={() => updateField('includeMembership', !formData.includeMembership)}
        />
        <RadioButton
            label="Will spend OP?"
            value={formData.willSpendOp}
            onToggle={() => updateField('willSpendOp', !formData.willSpendOp)}
            description="Toggle if you're willing to spend OP"
        />

        {formData.willSpendOp && (
        <Input
            type="text"
            value={formData.opAmount}
            onChange={e => updateField('opAmount', e.target.value)}
            placeholder="How much OP?"
            description="How much OP are you willing to spend?/How much OP on your account"
        />
        )}

        <RadioButton
            label="Show Specific Details"
            value={formData.showExtender}
            onToggle={() => updateField('showExtender', !formData.showExtender)}
            description="Extra stats and stuff"
        />
        {formData.showExtender && (
            <div className="bg-[#222222] w-full mx-auto">
                <Input
                    type="number"
                    placeholder="Headhunting rolls"
                    value={formData.pulls}
                    onChange={e => updateField('pulls', e.target.value)}
                    description="How many Headhunting Permits do you have on your account"
                />
            </div>
        )}

        <Input
            type="number"
            placeholder="Spark Cap"
            value={formData.sparkCap}
            onChange={e => updateField('sparkCap', e.target.value)}
            description="What is the required amount to guarantee a spark"
        />
    </form>
  );
}