import { Text, View, Switch } from "react-native";
import React, { useState } from "react";
import StringAppFr from "../../../resources/strings/fr-FR";
import InputFormApp from "../InputFormApp";
import LabelInputApp from "../LabelInputApp";
import styles from "./StyleFormCreateProfilCandidate";
import SubTitleScreen from "../SubTitleScreen";
import { SelectList } from 'react-native-dropdown-select-list'
import ContainerDegree from "../ContainerDegree";
import Checkbox from "expo-checkbox";
import generalStylesApp from "../../../styles/generalStylesApp";
import ButtonApp from "../ButtonApp";

const FormCreateCandidate = () => {

    // CheckBox
    const [isChecked, setChecked] = useState(false);

    const [enabledSearch, setEnabledSearch] = useState(false);
    const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Animateur },
        { key: '2', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Directeur },
    ]

    // Switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

        <View style={styles.formCreateCandidate}>

            <View>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    search={enabledSearch}
                    placeholder={StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.placeholder}
                    // maxHeight={200}
                    boxStyles={{
                        width: 300, height: 50, justifyContent: "center",
                        alignItems: 'center',
                    }}
                    inputStyles={{ fontSize: 14, margin: 2 }}
                    dropdownTextStyles={{ fontSize: 14, margin: 2 }}
                />
            </View>

            <View style={styles.styleContainerInput}>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.name}
                            />
                        }
                        StyleInputForm={styles.styleInputForm}

                    />

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.firstName}
                            />
                        }

                        // StyleViewContainerInputForm={styles.stylesViewInput}
                        StyleInputForm={styles.styleInputForm}

                    />
                </View>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.birthday}
                            />
                        }
                        StyleInputForm={styles.styleInputForm}

                    />

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.phone}
                            />
                        }

                        // StyleViewContainerInputForm={styles.stylesViewInput}
                        StyleInputForm={styles.styleInputForm}

                    />
                </View>

                <View style={styles.stylesViewInputFormCodePostalAndCity}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.postalCode}
                            />
                        }
                        StyleInputForm={styles.styleInputFormCodePostal}

                    />

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.city}
                            />
                        }
                        StyleInputForm={styles.styleInputFormCity}

                    />

                </View>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.address}
                            />
                        }
                        StyleInputForm={styles.styleInputFormAddressAndUploadFile}

                    />

                </View>

                <View style={styles.stylesViewInput}>

                    <InputFormApp

                        LabelInput={
                            <LabelInputApp
                                StyleViewInputLabel={styles.styleViewInputLabel}
                                StyleInputLabel={styles.StyleInputLabel}
                                ContentLabel={StringAppFr.screenCreateYourProfileCandidate.formLabelText.attachAPhoto}
                            />
                        }
                        StyleInputForm={styles.styleInputFormAddressAndUploadFile}

                    />

                </View>

                <View style={styles.stylesViewInput}>
                    <SubTitleScreen
                        StyleViewSubTitle={styles.styleViewSubTitleDegreeAndSectionMyAvailabilities}
                        StyleSubTitle={styles.styleSubTitleDegreeAndSectionMyAvailabilities}
                        ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.diplomaSection.subTitle}
                    />
                </View>

                <ContainerDegree />

                <View style={styles.stylesViewInput}>
                    <SubTitleScreen
                        StyleViewSubTitle={styles.styleViewSubTitleSectionMyAvailabilities}
                        StyleSubTitle={styles.styleSubTitleSectionMyAvailabilities}
                        ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subTitle}
                    />
                </View>


                <View style={styles.stylesViewInput}>
                    <SubTitleScreen
                        StyleViewSubTitle={styles.styleViewSubTtitleSubSectionDayOfTheWeek}
                        StyleSubTitle={styles.styleSubTtitleSubSectionDayOfTheWeek}
                        ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.titleSubSectionDayOfTheWeek}
                    />
                </View>

                <View style={styles.stylesViewInput}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionDayOfTheWeek.Choice1}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionDayOfTheWeek.Choice2}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.stylesViewInput}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: 300, height: 34 }}>
                        <View style={{ flexDirection: "row", width: 99, height: 30, alignItems: "center", }}>
                            <View style={{ justifyContent: "flex-start", marginLeft: 6, }}>
                                <Checkbox
                                    style={styles.styleCheckbox}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#003147' : undefined}
                                />
                            </View>

                            <View style={{ marginLeft: 6 }}>
                                <Text>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionDayOfTheWeek.Choice3}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "column", width: 145, height: 30, alignItems: "center", paddingRight: 80 }}>
                            <InputFormApp
                                StyleInputForm={{ width: 220, height: 29, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 1, borderRadius: 9, }}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.stylesViewInput}>
                    <SubTitleScreen
                        StyleViewSubTitle={styles.styleViewSubTtitleSubSectionDayOfTheWeek}
                        StyleSubTitle={styles.styleSubTtitleSubSectionDayOfTheWeek}
                        ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.titleSubSectionHolidayPeriods}
                    />
                </View>

                <View style={styles.stylesViewInput}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthFebrary}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthApril}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.stylesViewInput}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthJuly}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthOctober}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.stylesViewInput}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300, height: 34, marginBottom: 10, borderRadius: 5, borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR, borderWidth: 0.4, }}>
                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", paddingLeft: 6 }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthAugust}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", width: 145, height: 30, backgroundColor: '#ecf', justifyContent: "space-between", alignItems: "center", }}>
                            <View style={{ alignItems: "center", paddingLeft: 6 }}>

                                <Text style={{ color: '#152536' }}>{StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.subSectionHolidayPeriods.monthChristmas}</Text>

                            </View>
                            <View style={{ alignItems: "center", paddingRight: 6 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.stylesViewInput}>
                    <ButtonApp
                        styleButton={{
                            width: 102,
                            height: 50,
                            borderRadius: 9,
                            backgroundColor: '#7050D5',
                            marginTop: 33.35,
                            marginBottom: 5,
                            justifyContent: 'center'
                        }}
                        styleTitle={{
                            fontSize: 16,
                            lineHeight: 19.36,
                            textAlign: 'center',
                            fontWeight: '700',
                            color: generalStylesApp.ColorFromApp.SECOND_COLOR,
                            fontStyle: 'normal',
                        }}
                        titleButton={StringAppFr.screenCreateYourProfileCandidate.sectionMyAvailabilities.ButtonTitleFinish}

                    />
                </View>


            </View>

        </View>
    );
};

export default FormCreateCandidate;
