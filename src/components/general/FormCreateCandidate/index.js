import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StringAppFr from "../../../resources/strings/fr-FR";
import InputFormApp from "../InputFormApp";
import LabelInputApp from "../LabelInputApp";
import styles from "./StyleFormCreateProfilCandidate";
import SubTitleScreen from "../SubTitleScreen";
import { SelectList } from 'react-native-dropdown-select-list'
import ContainerDegree from "../ContainerDegree";

const FormCreateCandidate = () => {

    const [enabledSearch, setEnabledSearch] = useState(false);
    const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Animateur },
        { key: '2', value: StringAppFr.screenCreateYourProfileCandidate.formLabelText.jobSought.Directeur },
    ]

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

            </View>

        </View>
    );
};

export default FormCreateCandidate;
