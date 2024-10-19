import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Define the type for doctor prop
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  consultationFee: string;
  available: boolean;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.doctorInfo}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.doctorImage}
        />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.specialtyText}>{doctor.specialty}</Text>
          <View style={styles.availabilityContainer}>
            <Text style={styles.availableNow}>Available Now</Text>
            <Text style={styles.consultationFee}>
              {doctor.consultationFee} Consultation Fee
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.videoConsult}>📹 Video Consult</Text>
      <View style={styles.cardFooter}>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={18} color="#FFD700" />
          <Text style={styles.ratingText}>{doctor.rating}</Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  doctorInfo: {
    flexDirection: "row",
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  specialtyText: {
    color: "#6B7280",
    marginBottom: 8,
  },
  availabilityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  availableNow: {
    fontSize: 14,
    color: "#10B981",
    fontWeight: "bold",
  },
  consultationFee: {
    fontSize: 14,
    color: "#4B5563",
  },
  videoConsult: {
    marginVertical: 8,
    fontSize: 14,
    color: "#10B981",
    fontWeight: "bold",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#4B5563",
  },
  bookButton: {
    backgroundColor: "#1F2937",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default DoctorCard;
