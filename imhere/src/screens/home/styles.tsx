import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    paddingTop: 24,
    marginTop: StatusBar.currentHeight
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 4,
    marginTop: 20
  },
  eventDate: {
    color: '#d5d8de',
    fontSize: 12,
    marginTop: 2,
    marginLeft: 8
  },
  input: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    padding: 16,
    fontSize: 16
  },
  buttonSend: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E51C44',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 16,
    lineHeight: 56
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 20
  }
});