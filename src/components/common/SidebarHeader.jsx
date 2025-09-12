import React from 'react';
import Typography from './Typography';
import { useNavigate } from 'react-router-dom';

const sidebarHeaderStyle = {
  height: '64px',
  minHeight: '64px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  padding: '0 20px',
};

const logoStyle = (rtl) => ({
  width: '50px',
  minWidth: '50px',
  height: '35px',
  minHeight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  color: 'black',
  fontSize: '24px',
  fontWeight: 700,
  backgroundColor: '#009fdb',
  background: '#f6e05e',
  marginLeft: rtl ? '10px' : '0px',
  marginRight: rtl ? '4px' : '14px',
});

const SidebarHeader = ({ children, appName, rtl, ...rest }) => {
  const navigate = useNavigate()

  return (
    <div style={{ ...sidebarHeaderStyle }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }} onClick={() => navigate('/home')}>
        <div style={{ ...logoStyle(rtl) }}>FA</div>
        <Typography variant="subtitle1" fontWeight={700} color="#000000">
          {
            appName ? `${appName}`: `FilterArray`
          }
        </Typography>
      </div>
    </div>
  );
};

export default SidebarHeader;
