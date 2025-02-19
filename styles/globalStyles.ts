// import { StyleSheet } from "react-native";
// import { defaultTheme } from "./theme";

// type Theme = {
//   background: string;
//   forground: string;
//   fontColor: string;
// };

// export const lightTheme: Theme = {
//   background: "#fafafa",
//   forground: "#f5f5f5",
//   fontColor: "#222222",
// };

// export const darkTheme: Theme = {
//   background: "#1D1B20",
//   forground: "#322F35",
//   fontColor: "#d4d4d4",
// };

// export const getGlobalStyles = (themeColor: "dark" | "light") => {
//   const theme = themeColor == "light" ? lightTheme : darkTheme;
//   console.log(themeColor);

//   return StyleSheet.create({
//     header: {
//       backgroundColor: theme.forground,
//     },
//     headerTitle: {
//       color: theme.fontColor,
//     },
//     container: {
//       flex: 1,
//       padding: defaultTheme.padding * 2,
//       backgroundColor: theme.background,
//     },
//     containerCenter: {
//       flex: 1,
//       alignItems: "center",
//       padding: 24,
//       backgroundColor: theme.background,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: "bold",
//       marginBottom: defaultTheme.margin,
//       color: theme.fontColor,
//     },
//     subTitle: {
//       fontSize: 14,
//       marginBottom: defaultTheme.margin,
//       color: theme.fontColor,
//     },
//     text: {
//       color: theme.fontColor,
//     },
//     input: {
//       height: 42,
//       padding: defaultTheme.padding / 2,
//       borderColor: defaultTheme.secondaryColor,
//       borderWidth: 1,
//       borderRadius: defaultTheme.radius,
//       width: "100%",
//       marginBottom: defaultTheme.margin * 2,
//       backgroundColor: theme.forground,
//       color: theme.fontColor,
//     },
//     inputLabel: {
//       fontSize: 20,
//       marginBottom: defaultTheme.margin,
//       color: theme.fontColor,
//     },
//     inputError: {
//       height: 42,
//       padding: defaultTheme.padding / 2,
//       borderColor: defaultTheme.primaryColor,
//       borderWidth: 1,
//       borderRadius: defaultTheme.radius,
//       width: "100%",
//       color: defaultTheme.primaryColor,
//     },
//     button: {
//       height: 42,
//       padding: defaultTheme.padding / 2,
//       backgroundColor: defaultTheme.darkRed,
//       borderRadius: defaultTheme.radius,
//       width: "100%",
//       justifyContent: "center",
//     },
//     buttonText: {
//       color: "white",
//       textAlign: "center",
//       fontSize: 18,
//     },
//     icon: {
//       color: theme.fontColor,
//     },
//     upgradeCard: {
//       width: "100%",
//       backgroundColor: theme.forground,
//       borderRadius: defaultTheme.radius,
//       padding: defaultTheme.padding,
//       flexDirection: "row",
//       justifyContent: "space-between",
//       marginTop: defaultTheme.margin * 2,
//     },
//     themeButton: {
//       marginRight: defaultTheme.margin * 2,
//       padding: defaultTheme.padding,
//       borderRadius: defaultTheme.radius,
//       borderWidth: 1,
//       borderColor: theme.fontColor,
//     },
//   });
// };
