package com.twu.refactoring;

import java.util.ArrayList;
import java.util.Iterator;

import com.twu.refactoring.movie.ChildrensMovie;
import com.twu.refactoring.movie.NewReleaseMovie;
import com.twu.refactoring.movie.RegularMovie;

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

	public String statement() {
		double totalAmount = 0;
		int frequentRenterPoints = 0;
		Iterator<Rental> rentals = rentalList.iterator();
		String result = "Rental Record for " + getName() + "\n";
		while (rentals.hasNext()) {
			Rental each = rentals.next();
			double moviePrice = getMoviePrice(each);
			totalAmount += moviePrice;
			frequentRenterPoints = getRenterPoints(each, frequentRenterPoints);
			result += "\t" + each.getMovie().getTitle() + "\t" + String.valueOf(moviePrice) + "\n";
		}
		
		result += "Amount owed is " + String.valueOf(totalAmount) + "\n";
		result += "You earned " + String.valueOf(frequentRenterPoints) + " frequent renter points";
		return result;
	}
	
	/**
	 * 获取价格
	 * @param each 
	 */
	private double getMoviePrice(Rental each) {
		double moviePrice = 0;
		switch (each.getMovie().getPriceCode()) {
		case Movie.REGULAR:
			moviePrice = new RegularMovie().getPrice(each);
			break;
		case Movie.NEW_RELEASE:
			moviePrice = new NewReleaseMovie().getPrice(each);
			break;
		case Movie.CHILDRENS:
			moviePrice = new ChildrensMovie().getPrice(each);
			break;

		}
		return moviePrice;
	}
	
	/**
	 * 获取积分
	 */
	private int getRenterPoints(Rental each, int point){
		point++;
		if ((each.getMovie().getPriceCode() == Movie.NEW_RELEASE) && each.getDaysRented() > 1) {
			point++;				
		}
		return point;
	}
}
