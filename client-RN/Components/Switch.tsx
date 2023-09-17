import * as React from 'react';
import { Switch } from 'react-native-paper';

const SwitchComponent = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <Switch
            color='#00BFA4'
            value={isSwitchOn} 
            onValueChange={onToggleSwitch} />;
};

export default SwitchComponent;