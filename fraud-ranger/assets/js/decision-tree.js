/*
 * decision-tree.js
 * Provides a simple decision helper on the homepage.
 * When a user selects a fraud type, display the first three recommended steps.
 */

document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('fraudType');
  const result = document.getElementById('decisionResult');
  if (!select || !result) return;

  const steps = {
    money: [
      'Contact your bank immediately.',
      'Freeze or cancel compromised cards.',
      'Change all passwords.'
    ],
    identity: [
      'Visit the Federal Trade Commission Identity Theft portal.',
      'Create an identity theft report.',
      'Place a credit freeze with the three major bureaus.'
    ],
    online: [
      'Save evidence such as emails and screenshots.',
      'Report to the FBI Internet Crime Complaint Center.',
      'Report to the Federal Trade Commission.'
    ],
    investment: [
      'Stop any further payments.',
      'Gather all documentation.',
      'Report to the U.S. Securities and Exchange Commission.'
    ],
    tax: [
      'Gather documentation.',
      'Contact the IRS.',
      'Review your tax return for unauthorized changes.'
    ],
    social: [
      'Contact the Social Security Administration Office of Inspector General.',
      'Review your Social Security Statement.',
      'Place a fraud alert or credit freeze.'
    ],
    romance: [
      'Cease all communication with the scammer.',
      'Report to the FTC at reportfraud.ftc.gov.',
      'Protect your financial accounts.'
    ],
    tech: [
      'Disconnect from the scammer.',
      'Run trusted security software.',
      'Change your passwords.'
    ]
  };

  select.addEventListener('change', function (event) {
    const value = event.target.value;
    const list = steps[value];
    if (Array.isArray(list)) {
      result.innerHTML = '<ol>' + list.map(item => `<li>${item}</li>`).join('') + '</ol>';
    } else {
      result.textContent = '';
    }
  });
});