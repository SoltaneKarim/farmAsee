import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	TextInput,
	Modal,
	FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Stock = () => {
	const [isAdding, setIsAdding] = useState(false);
	const [itemType, setItemType] = useState("animal");
	const [selectedSexe, setSelectedSexe] = useState("");
	const [selectedOption, setSelectedOption] = useState(null); // Selected option from the custom dropdown
	const [animalModalVisible, setAnimalModalVisible] = useState(false);
	const [genderModalVisible, setGenderModalVisible] = useState(false);

	const [selectedAnimalType, setSelectedAnimalType] = useState(null);
	const [selectedAnimalOption, setSelectedAnimalOption] = useState(null);
	const [age, setAge] = useState("");
	const [weight, setWeight] = useState("");
	const randomAnimalOptions = [
		{ label: "Cow", imageSource: require("../../assets/animal6.png") },
		{ label: "Sheep", imageSource: require("../../assets/sheep.png") },
		// Add more options as needed with their respective image sources
	];

	const genderOptions = [
		{ label: "Male", imageSource: require("../../assets/male.png") },
		{ label: "Female", imageSource: require("../../assets/female.webp") },
		// Add more options as needed with their respective image sources
	];
	const toggleAdding = () => {
		setIsAdding(!isAdding);
	};

	const renderItemAnimal = () => {
		if (isAdding) {
			return (
				<View style={styles.inputwrapper}>
					{itemType === "animal" ? (
						<>
							<Image
								style={{ width: 200, height: 200 }}
								source={require("../../assets/sheep.png")}
							/>
							<TouchableOpacity
								style={styles.dropdown}
								onPress={() => setAnimalModalVisible(true)}>
								{selectedAnimalType ? (
									<View style={styles.selectedOptionContainer}>
										<Image
											source={selectedAnimalOption.imageSource}
											style={styles.optionImage}
										/>
										<Text style={styles.selectedOptionText}>
											{selectedAnimalType}
										</Text>
									</View>
								) : (
									<Text style={styles.placeholderText}>Select an animal</Text>
								)}
							</TouchableOpacity>

							{/* Custom dropdown modal for Animal */}
							<Modal
								transparent={true}
								animationType="slide"
								visible={animalModalVisible}
								onRequestClose={() => setAnimalModalVisible(false)}>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>
										<FlatList
											data={randomAnimalOptions}
											keyExtractor={(item, index) => index.toString()}
											renderItem={({ item }) => (
												<TouchableOpacity
													style={styles.optionContainer}
													onPress={() => {
														setSelectedAnimalType(item.label);
														setSelectedAnimalOption(item);
														setAnimalModalVisible(false);
													}}>
													<Image
														source={item.imageSource}
														style={styles.optionImage}
													/>
													<Text style={styles.optionText}>{item.label}</Text>
												</TouchableOpacity>
											)}
										/>
									</View>
								</View>
							</Modal>

							{/* Custom dropdown for selecting Sexe */}
							<TouchableOpacity
								style={styles.dropdown}
								onPress={() => setGenderModalVisible(true)}>
								{selectedSexe ? (
									<View style={styles.selectedOptionContainer}>
										<Image
											source={selectedSexe.imageSource}
											style={styles.optionImage}
										/>
										<Text style={styles.selectedOptionText}>
											{selectedSexe.label}
										</Text>
									</View>
								) : (
									<Text style={styles.placeholderText}>Select Sexe</Text>
								)}
							</TouchableOpacity>

							{/* Custom dropdown modal for Sexe */}
							<Modal
								transparent={true}
								animationType="slide"
								visible={genderModalVisible}
								onRequestClose={() => setGenderModalVisible(false)}>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>
										<FlatList
											data={genderOptions}
											keyExtractor={(item, index) => index.toString()}
											renderItemAnimal={({ item }) => (
												<TouchableOpacity
													style={styles.optionContainer}
													onPress={() => {
														setSelectedSexe(item);
														setGenderModalVisible(false);
													}}>
													<Image
														source={item.imageSource}
														style={styles.optionImage}
													/>
													<Text style={styles.optionText}>{item.label}</Text>
												</TouchableOpacity>
											)}
										/>
									</View>
								</View>
							</Modal>

							<TextInput
								style={styles.input}
								placeholder="Age"
								keyboardType="numeric"
								value={age}
								onChangeText={(text) => setAge(text)}
							/>
							<TextInput
								style={styles.input}
								placeholder="Weight"
								keyboardType="numeric"
								value={weight}
								onChangeText={(text) => setWeight(text)}
							/>
							{/* Add a submit button or logic here */}
						</>
					) : (
						
						<>
							<Image
								style={{ width: 200, height: 200 }}
								source={require("../../assets/tree.png")}
							/>
							<TouchableOpacity
								style={styles.dropdown}
								onPress={() => setAnimalModalVisible(true)}>
								{selectedAnimalType ? (
									<View style={styles.selectedOptionContainer}>
										<Image
											source={selectedAnimalOption.imageSource}
											style={styles.optionImage}
										/>
										<Text style={styles.selectedOptionText}>
											{selectedAnimalType}
										</Text>
									</View>
								) : (
									<Text style={styles.placeholderText}>Select an animal</Text>
								)}
							</TouchableOpacity>

							{/* Custom dropdown modal for Animal */}
							<Modal
								transparent={true}
								animationType="slide"
								visible={animalModalVisible}
								onRequestClose={() => setAnimalModalVisible(false)}>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>
										<FlatList
											data={randomAnimalOptions}
											keyExtractor={(item, index) => index.toString()}
											renderItem={({ item }) => (
												<TouchableOpacity
													style={styles.optionContainer}
													onPress={() => {
														setSelectedAnimalType(item.label);
														setSelectedAnimalOption(item);
														setAnimalModalVisible(false);
													}}>
													<Image
														source={item.imageSource}
														style={styles.optionImage}
													/>
													<Text style={styles.optionText}>{item.label}</Text>
												</TouchableOpacity>
											)}
										/>
									</View>
								</View>
							</Modal>

							{/* Custom dropdown for selecting Sexe */}
							<TouchableOpacity
								style={styles.dropdown}
								onPress={() => setGenderModalVisible(true)}>
								{selectedSexe ? (
									<View style={styles.selectedOptionContainer}>
										<Image
											source={selectedSexe.imageSource}
											style={styles.optionImage}
										/>
										<Text style={styles.selectedOptionText}>
											{selectedSexe.label}
										</Text>
									</View>
								) : (
									<Text style={styles.placeholderText}>Select Sexe</Text>
								)}
							</TouchableOpacity>

							{/* Custom dropdown modal for Sexe */}
							<Modal
								transparent={true}
								animationType="slide"
								visible={genderModalVisible}
								onRequestClose={() => setGenderModalVisible(false)}>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>
										<FlatList
											data={genderOptions}
											keyExtractor={(item, index) => index.toString()}
											renderItemAnimal={({ item }) => (
												<TouchableOpacity
													style={styles.optionContainer}
													onPress={() => {
														setSelectedSexe(item);
														setGenderModalVisible(false);
													}}>
													<Image
														source={item.imageSource}
														style={styles.optionImage}
													/>
													<Text style={styles.optionText}>{item.label}</Text>
												</TouchableOpacity>
											)}
										/>
									</View>
								</View>
							</Modal>

							<TextInput
								style={styles.input}
								placeholder="Age"
								keyboardType="numeric"
								value={age}
								onChangeText={(text) => setAge(text)}
							/>
							<TextInput
								style={styles.input}
								placeholder="Weight"
								keyboardType="numeric"
								value={weight}
								onChangeText={(text) => setWeight(text)}
							/>
							{/* Add a submit button or logic here */}
						</>
					
					)}
				</View>
			);
		} else {
			// Render the list of items (animals or trees)
			return (
				<ScrollView style={styles.scrollView}>
					{/* Your list of items goes here */}
					<View style={styles.all}>
						<View style={styles.wrapper}>
							<View style={styles.title}>
								<Text
									style={{
										fontSize: 24,
										fontWeight: "600",
										fontFamily: "Poppins-SemiBold",
										color: "#3a3f47",
									}}>
									This is what you have
								</Text>
								<Image
									style={{ marginLeft: 10 }}
									source={require("../../assets/info.png")}
								/>
							</View>

							<View style={styles.content}>
								<View style={styles.table}>
									<Image
										style={{ width: 50, height: 50 }}
										source={require("../../assets/animal6.png")}
									/>
									<Text>Name of product</Text>
									<Text>Quantity</Text>
								</View>
								{/* Add more items as needed */}
							</View>
						</View>
					</View>
				</ScrollView>
			);
		}
	};

	return (
		<View style={styles.container}>
			{renderItemAnimal()}
			<TouchableOpacity style={styles.plusButton} onPress={toggleAdding}>
				<Text style={styles.plusButtonText}>{isAdding ? "Save" : "+"}</Text>
			</TouchableOpacity>
			{isAdding && (
				<TouchableOpacity
					style={styles.toggleItemTypeButton}
					onPress={() =>
						setItemType(itemType === "animal" ? "tree" : "animal")
					}>
					<Text style={styles.toggleItemTypeButtonText}>
						{itemType === "animal" ? "Switch to Tree" : "Switch to Animal"}
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	all: {
		alignItems: "center",
		flex: 1,
	},
	wrapper: {
		marginTop: 20,
		width: "90%",
	},
	title: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		marginTop: 30,
	},
	table: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
	},
	plusButton: {
		position: "absolute",
		bottom: 20, // Adjust the value as needed to position the button at the desired distance from the bottom
		right: 20,
		backgroundColor: "blue", // Customize button styles as needed
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	plusButtonText: {
		fontSize: 24,
		color: "white",
	},
	toggleItemTypeButton: {
		position: "absolute",
		bottom: 90, // Adjust the value as needed to position the button
		right: 20,
		backgroundColor: "gray", // Customize button styles as needed
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	toggleItemTypeButtonText: {
		fontSize: 16,
		color: "white",
	},
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	dropdown: {
		height: "8%",
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
		width: "50%",
	},
	selectedOptionContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	selectedOptionText: {
		marginLeft: 10,
	},
	placeholderText: {
		color: "gray",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
		width: "80%",
	},
	optionContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	optionImage: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	optionText: {
		fontSize: 16,
	},
	plusButton: {
		position: "absolute",
		bottom: 20,
		right: 20,
		backgroundColor: "blue",
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	plusButtonText: {
		fontSize: 24,
		color: "white",
	},
	toggleItemTypeButton: {
		position: "absolute",
		bottom: 90,
		right: 20,
		backgroundColor: "gray",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	toggleItemTypeButtonText: {
		fontSize: 16,
		color: "white",
	},
	input: {
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		borderRadius: 5,
		width: "50%",
		marginBottom: 10,
		height: "9%",
	},
	inputwrapper: {
		// width: "90%",

		alignItems: "center",
	},
});

export default Stock;
