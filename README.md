# GLS QA Engineer technical assessment

## **Test Plan Outline**

**Scope & Flows Under Test**

Scope:
  - Add recipient information to parcel configuration (with valid and without data)
  - Add a parcel to shopping cart
  - Add sender data to checkout (with valid and without data)
  - Configure a parcel without standard measurements

Flows Under Test:
  - Recipient information with valid data
  - Recipient information without data - errors
  - Add a parcel to shopping cart
  - Sender information with valid data

## **Test-Case Table**

| Test Case ID    | 1                                                                              |
| :-------------- | :----------------------------------------------------------------------------- |
| Description     | Recipient information with valid data                                          |
| Prerequisites   | GLS pakete website should be available                                         |
| Steps           | 1. Open GLS pakete parcel configuration page                                   |
|                 | 2. Fill Recipient mandatory data                                               |
| Expected Result | Recipient information should be saved successfully                             |
| Actual Result   |                                                                                |
| Status          |                                                                                |

| Test Case ID    | 2                                                                              |
| :-------------- | :----------------------------------------------------------------------------- |
| Description     | Add parcel to shopping cart                                                    |
| Prerequisites   | GLS pakete website should be available                                         |
| Steps           | 1. Open GLS pakete parcel configuration page                                   |
|                 | 2. Fill Recipient mandatory data                                               |
|                 | 3. Click “Add to shopping cart” button                                         |
| Expected Result | Item and total cost should be visible. “To check out” button should be enabled |
| Actual Result   |                                                                                |
| Status          |                                                                                |

| Test Case ID    | 3                                                                              |
| :-------------- | :----------------------------------------------------------------------------- |
| Description     | Sender information with valid data                                             |
| Prerequisites   | GLS pakete website should be available                                         |
| Steps           | 1. Open GLS pakete checkout page                                               |
|                 | 2. Fill Sender mandatory data                                                  |
|                 | 3. Click “Save” button                                                         |
| Expected Result | Sender information should be saved successfully                                |
| Actual Result   |                                                                                |
| Status          |                                                                                |

| Test Case ID    | 4                                                                              |
| :-------------- | :----------------------------------------------------------------------------- |
| Description     | Recipient information without data - errors                                    |
| Prerequisites   | GLS pakete website should be available                                         |
| Steps           | 1. Open GLS pakete parcel configuration page                                   |
|                 | 2. Click “Add to shopping cart” button                                         |
| Expected Result | Error messages for mandatory fields should be visible                          |
| Actual Result   |                                                                                |
| Status          |                                                                                |

| Test Case ID    | 5                                                                              |
| :-------------- | :----------------------------------------------------------------------------- |
| Description     | Parcel size without standard measurements - errors                             |
| Prerequisites   | GLS pakete website should be available                                         |
| Steps           | 1. Open GLS pakete parcel configuration page                                   |
|                 | 2. Click “Find your Parcel Size” header                                        |
|                 | 3. Change “Length (cm)” to a invalid value                                     |
|                 | 4. Change “Width (cm)” to a invalid value                                      |
| Expected Result | Error messages for measurements should be visible                              |
| Actual Result   |                                                                                |
| Status          |                                                                                |

| Test Case ID    | 6                                                                              |
| :-------------- | :----------------------------------------------------------------------------- |
| Description     | Sender information without data - errors                                       |
| Prerequisites   | GLS pakete website should be available                                         |
| Steps           | 1. Open GLS pakete checkout page                                               |
|                 | 1. Click “Save” button                                                         |
| Expected Result | Error messages for sender should be visible                                    |
| Actual Result   |                                                                                |
| Status          |                                                                                |

## **Smoke Checklist**
  - [ ] Infrastructure up and running
  - [ ] https://www.gls-pakete.de/ up and running
  - [ ] “Parcel configuration” functionality up and running
  - [ ] “Cart” functionality up and running
  - [ ] “Checkout” functionality up and running

## **Installation**

Install Cypress:
  - Download and install Node.js
  - Install npm
    - Command: npm install -g npm
  - Install Cypress
    - Command: npm install cypress --save-dev

Open Cypress:
  - Command: npx cypress open

## **AI Disclosure**

Copilot: Used to find a solution to remove the “Privacy Information” overlay thru the automation suite.
