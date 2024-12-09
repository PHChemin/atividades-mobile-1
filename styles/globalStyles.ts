import { StyleSheet } from "react-native";

export const theme = {
  primaryColor: "#EA0805",
  secondaryColor: "#DBCBC8",
  darkRed: "#530e10",
  defaultPadding: 8,
  defaultMargin: 8,
  defaultRadius: 8,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.defaultPadding * 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: theme.defaultMargin,
  },
  subTitle: {
    fontSize: 14,
    marginBottom: theme.defaultMargin,
  },
  input: {
    height: 42,
    padding: theme.defaultPadding / 2,
    borderColor: theme.secondaryColor,
    borderWidth: 1,
    borderRadius: theme.defaultRadius,
    width: "100%",
    marginBottom: theme.defaultMargin * 2,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: theme.defaultMargin,
  },
  inputError: {
    height: 42,
    padding: theme.defaultPadding / 2,
    borderColor: theme.primaryColor,
    borderWidth: 1,
    borderRadius: theme.defaultRadius,
    width: "100%",
    color: theme.primaryColor,
  },
  button: {
    height: 42,
    padding: theme.defaultPadding / 2,
    backgroundColor: theme.darkRed,
    borderRadius: theme.defaultRadius,
    width: "100%",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
