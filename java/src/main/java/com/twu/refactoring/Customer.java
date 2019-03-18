package com.twu.refactoring;

import java.util.ArrayList;
import java.util.Iterator;

public class Customer {

	private String name;
	private ArrayList<Rental> rentalList = new ArrayList<Rental>();

	public Customer(String name) {
		this.name = name;
	}

	public void addRental(Rental arg) {
		rentalList.add(arg);
	}

	public String getName() {
		return name;
	}

	public String getRetalsStatement() {
		double totalAmount = getTotalAmont();
		int frequentRenterPoints = getFrequentRenterPoints();
		String retalsStatement = "Rental Record for " + getName() + "\n";
		retalsStatement += getRetalStatement();
		retalsStatement += "Amount owed is " + String.valueOf(totalAmount) + "\n";
		retalsStatement += "You earned " + String.valueOf(frequentRenterPoints)
				+ " frequent renter points";
		return retalsStatement;
	}

	private double getTotalAmont() {
		double totalAmount = 0;
		Iterator<Rental> rentals = rentalList.iterator();
		
		while (rentals.hasNext()) {
			Rental rental = rentals.next();
			double thisAmount = rental.getAmount();
			totalAmount += thisAmount;
		}
		
		return totalAmount;
	}

	private int getFrequentRenterPoints() {
		int frequentRenterPoints = 0;
		Iterator<Rental> rentals = rentalList.iterator();
		
		while (rentals.hasNext()) {
			Rental rental = rentals.next();
			double frequentRenterPoint = rental.getFrequentRenterPoint();
			frequentRenterPoints += frequentRenterPoint;
		}
		
		return frequentRenterPoints;
	}

	private String getRetalStatement() {
		String retalStatement = "";
		Iterator<Rental> rentals = rentalList.iterator();

		while (rentals.hasNext()) {
			Rental rental = rentals.next();
			String rentalResult = rental.getRetalStatement();
			retalStatement += rentalResult;
		}
		return retalStatement;
	}
}
